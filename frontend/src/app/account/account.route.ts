import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccopuntAppComponent } from './account.app.component';
import { RegisterComponent } from '../account/register/register.component';
import { LoginComponent } from './login/login.component';

const accountRouterConfig: Routes = [
    { path: '', component: AccopuntAppComponent, 
        children: [
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent }
        ]
    }
    
]

@NgModule({
    imports: [
        RouterModule.forChild(accountRouterConfig)
    ],
    exports: []
})
export class AccountRoutingModule {}