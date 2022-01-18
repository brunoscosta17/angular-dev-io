import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AccountRoutingModule } from './account.route';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccopuntAppComponent } from './account.app.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AccopuntAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
