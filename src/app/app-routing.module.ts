import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "user/login", pathMatch: "full" },
  { path: 'register', component:RegisterComponent },
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'doctors', component:DoctorsComponent },
  { path: 'doctordetails', component:DoctordetailsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
