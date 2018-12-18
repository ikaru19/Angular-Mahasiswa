import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MahasiswaComponent }   from './mahasiswa/mahasiswa.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MahasiswaDetailComponent } from './mahasiswa-detail/mahasiswa-detail.component'
import { AddHeroesComponent } from './add-heroes/add-heroes.component'
import {  LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MahasiswaDetailComponent },
  { path: 'mahasiswa', component: MahasiswaComponent },
  { path: 'add_mahasiswa', component: AddHeroesComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register' , component : RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}