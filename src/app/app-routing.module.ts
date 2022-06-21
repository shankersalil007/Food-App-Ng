import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderTrackComponent } from './components/order-track/order-track.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { RegisterComponent } from './components/register/register.component';
import { AddressComponent } from './components/settings/address/address.component';
import { ProfileComponent } from './components/settings/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'passwordreset', component: PasswordResetComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'settings/userprofile', component: ProfileComponent},
  {path: 'settings/useraddaddress', component: AddressComponent},
  {path: 'settings/useraddpaymentdetails', component: AddressComponent},
  {path: 'confirmorder', component: ConfirmOrderComponent},
  {path: 'placeorder', component: OrderTrackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
