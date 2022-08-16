import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  inventoryForm:FormGroup


   constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
     this.initializeForm();
  }
  initializeForm(): void{
    this.inventoryForm = this.fb.group({
      author: '',
      category: '',
      cost: '',
      stock: '',
      title: ''

    })

}
onAdd(){
  this.http.post<any>("http://localhost:2022/inventory", this.inventoryForm.value).subscribe(res=>{
    alert("Book added successfully");
    this.inventoryForm.reset()
})
}
}