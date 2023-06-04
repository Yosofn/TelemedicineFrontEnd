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
import { ProfiledoctorComponent } from './Pages/profiledoctor/profiledoctor.component';
import { MedicalrecordComponent } from './Pages/medicalrecord/medicalrecord.component';
import { PatientListComponent } from './Pages/patient-list/patient-list.component';
import { AppoimentListComponent } from './Pages/appoiment-list/appoiment-list.component';
import { MyAppoimentRequestComponent } from './Pages/my-appoiment-request/my-appoiment-request.component';
import { CongratsComponent } from './Pages/Modals/congrats/congrats.component';
import { OppsComponent } from './Pages/Modals/opps/opps.component';
import { PaymentAdminComponent } from './Pages/Admin/payment-admin/payment-admin.component';
import { WidgetsAdminComponent } from './Pages/Admin/widgets-admin/widgets-admin.component';
import { WiatingsAdminComponent } from './Pages/Admin/wiatings-admin/wiatings-admin.component';
import { AdminProfileComponent } from './Pages/Admin/admin-profile/admin-profile.component';
import { RegisterationAdminComponent } from './Pages/Admin/registeration-admin/registeration-admin.component';
import { OrderNewAdminComponent } from './Pages/Admin/order-new-admin/order-new-admin.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutOurCompanyComponent } from './Pages/about-our-company/about-our-company.component';

const routes: Routes = [
  {path:'' , redirectTo:"home", pathMatch:"full"},
  {path:'register' , component: RegisterComponent},
  {path:'recoverypassword' , component: RecoverypassComponent},
  {path:'newpass' , component: NewpassComponent},
  {path:'login' , component: LoginComponent},
  {path:'home' , component: HomeComponent},
  {path:'medicalreports' , component: MedicalreportsComponent},
  {path:'meetourdoctors' , component: MeetourdoctorsComponent},
  {path:'meet-our-doctors' , component: DoctorsComponent},
  {path:'chat' , component: ChatsComponent},
  {path:'medicalanalysis' , component: MedicalAnalysisComponent},
  {path:'medicalradiology' , component: MedicalradiologyComponent},
  {path:'registerdoctor' , component: DoctorregisterComponent},
  {path:'payments' , component: PaymentsComponent},
  {path:'success' , component: ModalsuccessComponent},
  {path:'Profiledoctor' , component: ProfiledoctorComponent},
  {path:'medical-record' , component: MedicalrecordComponent},
  {path:'patient-list-and-details' , component: PatientListComponent},
  {path:'appoiment-list' , component: AppoimentListComponent},
  {path:'my-appoiment-list' , component: MyAppoimentRequestComponent},
  {path:'homedoctor' , component: DoctordetailsComponent},
  {path:'congrats' , component: CongratsComponent},
  {path:'opps' , component: OppsComponent},
  {path:'payment-admin' , component:PaymentAdminComponent},
  {path:'payment-Widjet' , component:WidgetsAdminComponent},
  {path:'payment-waitng' , component:WiatingsAdminComponent},
  {path:'admin-profile' , component:AdminProfileComponent},
  {path:'admin-order-new' , component:OrderNewAdminComponent},
  {path:'admin-register' , component:RegisterationAdminComponent},
  {path:'contacts' , component:ContactComponent},
  {path:'about-our-company' , component:AboutOurCompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: false , scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
