import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './branches/home.component';
import { MyapppageComponent } from './branches/myapppage.component';
import { DirectiveComponent } from './branches/directive.component';
import { RendererComponent } from './branches/renderer/renderer.component';
import { Exercise02Component } from './branches/excercise02/excercise02.component';


const pageRoutes: Routes = [
    { path: 'pages', component: PagesComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'home', component: HomeComponent},
            {path: 'app', component: MyapppageComponent},
            {path: 'directive', component: DirectiveComponent},
             {path: 'renderer', component: RendererComponent},
             {path: 'exercise02', component: Exercise02Component}
        ] },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
];

export const RouteConfig: ModuleWithProviders = RouterModule.forRoot(pageRoutes);
