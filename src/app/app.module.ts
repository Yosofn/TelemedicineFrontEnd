import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import {HttpClientModule, HttpClient} from '@angular/common/http';
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

import { FooterComponent } from './Shared/footer/footer.component';

import { ProfiledoctorComponent } from './Pages/profiledoctor/profiledoctor.component';
import { MedicalrecordComponent } from './Pages/medicalrecord/medicalrecord.component';
import { PatientListComponent } from './Pages/patient-list/patient-list.component';
import { AppoimentListComponent } from './Pages/appoiment-list/appoiment-list.component';
import { MyAppoimentRequestComponent } from './Pages/my-appoiment-request/my-appoiment-request.component';
import { OppsComponent } from './Pages/Modals/opps/opps.component';
import { CongratsComponent } from './Pages/Modals/congrats/congrats.component';


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
    CongratsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
