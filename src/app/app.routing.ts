import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },

  { path: 'cursos', component: CursosComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)
