import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:UserService;
  profileForm: FormGroup;
  constructor() {
    this.currentUser = new UserService();
   }

  ngOnInit(): void {}

  onSubmit() {
    alert("You clicked the update profile button");

  }
}
