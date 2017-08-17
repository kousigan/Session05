import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './branches/home.component';
import { MyapppageComponent } from './branches/myapppage.component';


import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { RouteConfig } from './pages.routing';
import { BasicDirective } from '../../directive/basic.directive';
import { BetterDirective } from '../../directive/better.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouteConfig
  ],
  declarations: [
    PagesComponent,
    SidemenuComponent,
    HomeComponent,
    MyapppageComponent,
    BasicDirective,
    BetterDirective
  ]
})
export class PagesModule { }
