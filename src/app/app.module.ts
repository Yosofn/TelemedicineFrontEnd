import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // import the FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DoctorsComponent } from './Pages/doctors/doctors.component';
import { DoctordetailsComponent } from './Pages/doctordetails/doctordetails.component';
import { LoaderComponent } from './Shared/loader/loader.component';
import { TopbarComponent } from './Shared/topbar/topbar.component';
import { GoTopComponent } from './Shared/go-top/go-top.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './Shared/footer/footer.component';
import { DoctorregisterComponent } from './Pages/doctorregister/doctorregister.component';
import { RecoverypassComponent } from './Auth/recoverypass/recoverypass.component';
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
import { OppsComponent } from './Pages/Modals/opps/opps.component';
import { CongratsComponent } from './Pages/Modals/congrats/congrats.component';
<<<<<<< HEAD
import { PaymentAdminComponent } from './Pages/Admin/payment-admin/payment-admin.component';
import { WidgetsAdminComponent } from './Pages/Admin/widgets-admin/widgets-admin.component';
import { WiatingsAdminComponent } from './Pages/Admin/wiatings-admin/wiatings-admin.component';
import { DoctorApplicationComponent } from './Pages/Admin/doctor-application/doctor-application.component';
import { DoctorAccountsComponent } from './Pages/Admin/doctor-accounts/doctor-accounts.component';
import { QuikRegisterationComponent } from './Pages/Admin/quik-registeration/quik-registeration.component';
import { ListAdminComponent } from './Pages/Admin/list-admin/list-admin.component';
import { AdminProfileComponent } from './Pages/Admin/admin-profile/admin-profile.component';
import { RegisterationAdminComponent } from './Pages/Admin/registeration-admin/registeration-admin.component';
import { OrderNewAdminComponent } from './Pages/Admin/order-new-admin/order-new-admin.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutOurCompanyComponent } from './Pages/about-our-company/about-our-company.component';
=======
import { HttpInterceptorService  } from './interceptor';
import { QuickRegisterComponent } from './Auth/quick-register/quick-register.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
>>>>>>> 17edb1770aa17bfc7ce5d00ea3057a00747a29be

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DoctorsComponent,
    DoctordetailsComponent,
    LoaderComponent,
    TopbarComponent,
    GoTopComponent,
    FooterComponent,
    RecoverypassComponent,
    DoctorregisterComponent,
    NewpassComponent,
    MedicalreportsComponent,
    MeetourdoctorsComponent,
    ChatsComponent,
    MedicalAnalysisComponent,
    MedicalradiologyComponent,
    PaymentsComponent,
    ModalsuccessComponent,
    ProfiledoctorComponent,
    MedicalrecordComponent,
    PatientListComponent,
    AppoimentListComponent,
    MyAppoimentRequestComponent,
    OppsComponent,
    CongratsComponent,
<<<<<<< HEAD
    PaymentAdminComponent,
    WidgetsAdminComponent,
    WiatingsAdminComponent,
    DoctorApplicationComponent,
    DoctorAccountsComponent,
    QuikRegisterationComponent,
    ListAdminComponent,
    AdminProfileComponent,
    RegisterationAdminComponent,
    OrderNewAdminComponent,
    ContactComponent,
    AboutOurCompanyComponent
=======
    QuickRegisterComponent,
    DashboardComponent,
    
>>>>>>> 17edb1770aa17bfc7ce5d00ea3057a00747a29be
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
