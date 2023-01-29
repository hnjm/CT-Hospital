import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RenewPasswordComponent } from './renew-password/renew-password.component';

const routes: Routes = [
  { path:"", redirectTo:"login", pathMatch: 'full' },
  { path:'register' , component: RegisterComponent },
  { path:"login", component: LoginComponent},
  { path: 'renewPassword/:id', component:RenewPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
