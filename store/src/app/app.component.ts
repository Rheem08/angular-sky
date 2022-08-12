import { Component, OnInit } from '@angular/core';
import { Booky } from './Booky';
import {BookyService} from './booky.service';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
 public rity:boolean
 
  va=LoginComponent.valid
  constructor(private bookyService : BookyService){}
  booky: Booky | any;
 
 
  ngOnInit(){
    
    this.bookyService.getValue().subscribe((value)=>{this.rity=value})
    this.bookyService.setValue(true)
    console.log(this.rity)
    
   
} 



}

