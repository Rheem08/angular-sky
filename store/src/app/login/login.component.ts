import { HttpRequest, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booky } from '../Booky';
import {BookyService} from '../booky.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public static valid:boolean=false
  public static invalid:boolean=true;
  

  constructor(private bookyService: BookyService, private fb: FormBuilder, 
    private http: HttpClient, private router: Router, public myUser:UserService){
      
    }
  booky: Booky | any;

  ngOnInit(): void {
    this.initializeForm();
}
initializeForm(): void{
  this.loginForm = this.fb.group({
    username: [''],
    p_word: ['']

  })
  
}
onSubmit(){
  this.http.get<any>("http://localhost:2022/booky").subscribe(res=>{ //connects the RestAPI, performs get method
    const user = res.find((a:any)=>{ //inside of response we are assigned the values found at the resource in the response to the user
      const username = a.username;
      const p_word = a.p_word;
      const email = a.email;
      const f_name = a.f_name;
      const l_name = a.l_name;
      let xUse = a.id; //trying to grab user id
      let temp:Booky;
      var returnme:boolean = false;
      if (a.username === this.loginForm.value.username){
        if(a.p_word === this.loginForm.value.p_word){
          returnme = true;
          this.myUser.userID = a.id // assinging id          
          this.myUser.email = a.email;
          this.myUser.firstName = a.f_name;
          this.myUser.lastName = a.l_name;
          this.myUser.userName = this.loginForm.value.username;
          
        }        
      }
      // return this.myUser.userName === this.loginForm.value.username && this.myUser.userPassword === this.loginForm.value.p_word;
      return returnme;
    });
    this.bookyService.setValue(false)

    if(user){
    alert("Login successful");
    this.router.navigate(['inventory']); 
  }else {
    alert("User not found!");
  }
},err=>{
  alert("something went wrong...");
})
}

}