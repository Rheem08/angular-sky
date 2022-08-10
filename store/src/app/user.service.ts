import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userID: number;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  userPassword: string;
  userRole: string;

  constructor() {
    this.userID = 0;
    this.firstName = "Null";
    this.lastName = "User";
    this.email = "nobody@email.com";
    this.userName = "NullUser";
    this.userPassword = "";
    this.userRole = "testing";

   }
}
