import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booky } from '../Booky';
import {BookyService} from '../booky.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private bookyService : BookyService){}
  booky: Booky | any;

  ngOnInit(): void {
      this.bookyService.GetBooky(HttpRequest)
      .subscribe(data =>{
          console.log("GET Request to get a employee with id - 13");
          console.log("id: " + data.username); 
            console.log("name: " + data.p_word);
            console.log("age: " + data.email);
            console.log("name: " + data.f_name);
            console.log("age: " + data.l_name);
  }

      );
}
}