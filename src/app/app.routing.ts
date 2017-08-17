import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

 import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
   { path: '', redirectTo: 'pages', pathMatch: 'full' },
   { path: '**', component: LoginComponent},
   { path: 'login', component: LoginComponent}

];

export const RouteConfig: ModuleWithProviders = RouterModule.forRoot(routes);
