import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderTrackComponent } from './components/order-track/order-track.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { PaymentEditComponent } from './components/payment-edit/payment-edit.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { RegisterComponent } from './components/register/register.component';
import { AddressComponent } from './components/settings/address/address.component';
import { PaymentComponent } from './components/settings/payment/payment.component';
import { ProfileComponent } from './components/settings/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuard } from './services/AuthGuard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'passwordreset', component: PasswordResetComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'userprofile',
      },
      {
        path: 'userprofile',
        component: ProfileEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'useraddaddress',
        component: AddressComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'useraddpaymentdetails',
        component: PaymentComponent,
        canActivate: [AuthGuard],
      },
    ],
  },

  {
    path: 'confirmorder',
    component: ConfirmOrderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'placeorder',
    component: OrderTrackComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: '**',
  //   redirectTo: 'login',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
