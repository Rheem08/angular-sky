import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {InventoryComponent} from './inventory/inventory.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'login' , component:LoginComponent},
  {path: 'register' , component:RegisterComponent},
  {path: 'inventory' ,component:InventoryComponent},
  {path: 'shop',component:MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
