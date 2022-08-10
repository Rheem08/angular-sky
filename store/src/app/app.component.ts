import { Component, OnInit } from '@angular/core';
import { Booky } from './Booky';
import {BookyService} from './booky.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  
  constructor(private bookyService : BookyService){}
  booky: Booky | any;
  new_booky = { //this is in relation to creating new object (post method)
    "username" : "paulwall",
    "p_word" : "123456",
    "email" : "pWall@wall.net",
    "f_name" : "Paul",
    "l_name" : "Waller"
  };
  //console log used if i didint use the html/template page
  ngOnInit(){
    this.bookyService.GetBookies()
          .subscribe(data =>{
                this.booky = data;
          });
    //code for new booky, alternative away found within register component
    // this.bookyService.CreateBooky(this.new_booky)
    //     .subscribe(data =>{
    //         console.log("Post Request for creating new employee");
    //         console.log("id: " + data.username); 
    //         console.log("name: " + data.p_word);
    //         console.log("age: " + data.email);
    //         console.log("name: " + data.f_name);
    //         console.log("age: " + data.l_name);
    //     }
    // );

    //used to get specific user with id
  //   this.bookyService.GetBooky(13)
  //     .subscribe(data =>{
  //         console.log("GET Request to get a employee with id - 13");
  //         console.log("id: " + data.username); 
  //           console.log("name: " + data.p_word);
  //           console.log("age: " + data.email);
  //           console.log("name: " + data.f_name);
  //           console.log("age: " + data.l_name);
  //     }
  // );
} 



}

