import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookyService } from '../booky.service';
import { UserService } from '../user.service';
import { Booky } from '../Booky';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:UserService;
  profileForm: FormGroup;
  constructor(private bookyService: BookyService,public myUser:UserService, private fb: FormBuilder) {
    this.currentUser = new UserService;
    this.currentUser.firstName = myUser.firstName;
    this.currentUser.userID = myUser.userID// catching user id

    
    //this.boo.f_name = myUser.firstName
    this.currentUser.lastName = myUser.lastName;
    this.currentUser.email = myUser.email
    this.currentUser.userName = myUser.userName;
    this.currentUser.userPassword = myUser.userPassword
    
   }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ngOnInit(): void {
    this.currentUser.firstName = this.myUser.firstName;
    this.profileForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      

    })
  }
  booky:Booky|any
   

  onSubmit() {
    this.currentUser.firstName = this.profileForm.value.firstName;
    this.currentUser.lastName = this.profileForm.value.lastName;
    this.currentUser.email = this.profileForm.value.email;
    this.currentUser.userName = this.profileForm.value.userName;
    this.currentUser.userPassword = this.profileForm.value.password;
    console.log(this.currentUser.userID, this.currentUser,this.myUser)
    this.bookyService.UpdateBooky(this.myUser.userID, this.currentUser).subscribe(res=>{
      alert("You clicked the update profile button");
    })
    //console.log(this.currentUser.userID)
  }
}
