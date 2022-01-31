import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomFormsModule } from 'ngx-custom-validators';

import { AccountRoutingModule } from './account.route';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccopuntAppComponent } from './account.app.component';
import { AccountService } from './services/account.service';

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
    AccountRoutingModule,
    CustomFormsModule
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
