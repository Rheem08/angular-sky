import { Component, OnInit } from '@angular/core';
import { Booky } from '../Booky';
import {BookyService} from '../booky.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { NgxNavbarDynamicExpandDirective } from 'ngx-bootstrap-navbar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup; //this is how we bind the template with the fields in this class
  //this will be crucial towards submission

  constructor(private bookyService: BookyService, private fb: FormBuilder, private http: HttpClient, private router: Router) { }
  booky: Booky | any;

  ngOnInit(): void {
    this.initializeForm();
  }
  //this is how you create a reactive form on the component side
  initializeForm(): void{
    this.registerForm = this.fb.group({
      f_name: '',
      l_name: '',
      username: '',
      p_word: '',
      email: ''

    })
  }
  

  //this is what happens when i click the submit button within the form
onSubmit(){
  this.http.post<any>("http://localhost:8080/booky", this.registerForm.value).subscribe(res=>{
    alert("Registration successful");
    this.registerForm.reset()
    this.router.navigate(['login']);
  },err=>{
    alert("Something went wrong!")
  })
  
  
 
 console.log(this.registerForm);
  // this.bookyService.CreateBooky(this.new_booky)
  //       .subscribe(data =>{  });
}

}
