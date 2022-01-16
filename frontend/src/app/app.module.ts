import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './institucional/about/about.component';
import { NavigationModule } from './navigation/navigation.module';
import { RegisterComponent } from './institucional/register/register.component';
import { ProductsComponent } from './institucional/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegisterComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    NavigationModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
