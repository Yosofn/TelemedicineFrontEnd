import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctordetailsComponent } from './Pages/doctordetails/doctordetails.component';
import { DoctorsComponent } from './Pages/doctors/doctors.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { RecoverypassComponent } from './Auth/recoverypass/recoverypass.component';
import { DoctorregisterComponent } from './Pages/doctorregister/doctorregister.component';
import { NewpassComponent } from './Auth/newpass/newpass.component';
import { MedicalreportsComponent } from './Pages/medicalreports/medicalreports.component';
import { MeetourdoctorsComponent } from './Pages/meetourdoctors/meetourdoctors.component';
import { ChatsComponent } from './Pages/chats/chats.component';
import { MedicalAnalysisComponent } from './Pages/medical-analysis/medical-analysis.component';
import { MedicalradiologyComponent } from './Pages/medicalradiology/medicalradiology.component';
import { PaymentsComponent } from './Pages/payments/payments.component';
import { ModalsuccessComponent } from './Shared/modalsuccess/modalsuccess.component';

const routes: Routes = [
  {path:'' , redirectTo:"home", pathMatch:"full"},
  {path:'register' , component: RegisterComponent},
  {path:'recoverypassword' , component: RecoverypassComponent},
  {path:'newpass' , component: NewpassComponent},
  {path:'login' , component: LoginComponent},
  {path:'home' , component: HomeComponent},
  {path:'medicalreports' , component: MedicalreportsComponent},
  {path:'meetourdoctors' , component: MeetourdoctorsComponent},
  {path:'chat' , component: ChatsComponent},
  {path:'medicalanalysis' , component: MedicalAnalysisComponent},
  {path:'medicalradiology' , component: MedicalradiologyComponent},
  {path:'registerdoctor' , component: DoctorregisterComponent},
  {path:'payments' , component: PaymentsComponent},
  {path:'success' , component: ModalsuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
