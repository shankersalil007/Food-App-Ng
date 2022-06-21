import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/settings/profile/profile.component';
import { AddressComponent } from './components/settings/address/address.component';
import { PaymentComponent } from './components/settings/payment/payment.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { OrderTrackComponent } from './components/order-track/order-track.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PasswordResetComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
    AddressComponent,
    PaymentComponent,
    ConfirmOrderComponent,
    OrderTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
