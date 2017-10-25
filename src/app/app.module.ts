import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './components/pages/pages.module';

import { AppComponent } from './app.component';
import { RouteConfig } from './app.routing';
import { LoginComponent } from './components/login/login.component';

import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouteConfig,
    PagesModule,
  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
