import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookyService } from '../booky.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:UserService;
  profileForm: FormGroup;
  constructor(private bookyService: BookyService,public myUser:UserService) {
    this.currentUser = new UserService;
    this.currentUser.firstName = myUser.firstName;
    
   }

  ngOnInit(): void {
    this.currentUser.firstName = this.myUser.firstName;
  }

  onSubmit() {
    alert("You clicked the update profile button");

  }
}
