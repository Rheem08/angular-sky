import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    InventoryComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    MainComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxNavbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
