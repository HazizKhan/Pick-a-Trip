import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import {Routes } from '@angular/router';
export const routes:Routes = [
    {path:'',component: HomeComponent},
    {path:'login', component: SigninComponent},
    {path: 'register', component: SignupComponent}
];