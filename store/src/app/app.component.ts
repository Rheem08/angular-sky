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
 
 
  ngOnInit(){
   
} 



}

