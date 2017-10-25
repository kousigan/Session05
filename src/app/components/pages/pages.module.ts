import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './branches/home.component';
import { PersonComponent } from './branches/parent.component';

import { MyapppageComponent } from './branches/myapppage.component';
import { DirectiveComponent } from './branches/directive.component';

import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { RouteConfig } from './pages.routing';

import { BasicDirective } from '../../directive/basic.directive';
import { BetterDirective } from '../../directive/better.directive';
import { SectionDirective } from '../../directive/section.directive';
import { AsideDirective } from '../../directive/aside.directive';
import { StrucDirective } from '../../directive/struc.directive';

import { RendererComponent } from './branches/renderer/renderer.component';
import { Exercise02Component } from './branches/excercise02/excercise02.component';

import { ChildComponent } from './branches/excercise02/child.component';

@NgModule({
  imports: [
    FormsModule,
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
    BetterDirective,
    SectionDirective,
    AsideDirective,
    StrucDirective,
    DirectiveComponent,
    RendererComponent,
    PersonComponent,
    Exercise02Component,
    ChildComponent
  ]
})
export class PagesModule { }
