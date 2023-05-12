import { Component, OnInit } from '@angular/core';
import { registerDoctor } from 'src/app/Auth/interfaces/register';
import { UserDataSessioStoreg } from 'src/app/Auth/interfaces/user-data';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.scss']
})
export class DoctorregisterComponent implements OnInit {
  register:registerDoctor={
    nationalId: 0,
    username: "",
    password: "",
    address: "",
    phone: "",
    fname: "",
    lname: "",
    education: "",
    profilePicture: "",
    profileStatus: 1,
    experience: "",
    sepcialzation: "",
    description: "",
    doctorStatus: 1,
    submissionDate: "2023-05-11T08:44:07.413Z",
    adminId: 4
  }

  
  // certificationFile: File;

  userdata:UserDataSessioStoreg;

  showPopup = false;


  sepcialzation = ['Cardiologist', 'Neurologist', 'Pediatrician', 'Surgeon', 'Psychiatrist', 'Anesthesiologist', 'Internal Medicine Physician', 'Gynecologist'];

  constructor(private AuthenticationService:AuthenticationService) {
    
this.userdata = JSON.parse(sessionStorage.getItem('userData') as string);

   }

  ngOnInit(): void {

  }
  SumbitApplication(register:registerDoctor){
   this.register.nationalId=this.userdata.nationalId;
   this.register.username=this.userdata.username;
   this.register.password=this.userdata.password;
   this.register.address=this.userdata.address;
   this.register.phone=this.userdata.phone;
   this.register.fname=this.userdata.fname;
   this.register.lname=this.userdata.lname;
   

    
    this.AuthenticationService.doctorRegister(register).subscribe((response)=>{
      if (response) {
        this.showPopup = true;
      
        setTimeout(() => {
          this.showPopup = false;
        }, 3000); // show for 3 seconds
  
       } 
      
      
      })
    
    }
}
