import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './branches/home.component';
import { MyapppageComponent } from './branches/myapppage.component';


const pageRoutes: Routes = [
    { path: 'pages', component: PagesComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'home', component: HomeComponent},
            {path: 'app', component: MyapppageComponent}
        ] },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
];

export const RouteConfig: ModuleWithProviders = RouterModule.forRoot(pageRoutes);
