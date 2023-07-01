import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import{quickRegister}from 'src/app/Auth/interfaces/register';
@Component({
  selector: 'app-registeration-admin',
  templateUrl: './registeration-admin.component.html',
  styleUrls: ['./registeration-admin.component.scss']
})

export class RegisterationAdminComponent implements OnInit {
  _quickRegister:quickRegister={
    nationalId: 0,
    username: "",
    phone: "",
    deviceNumber: 0,
    report:""
  }
  showPopup=false;
  userData :quickRegister={

    nationalId: 0,
    username: "",
    phone: "",
    deviceNumber: 0,
    report: ""
  } 
  userData2:any={}
  constructor(private AuthenticationService:AuthenticationService) {
this.userData2=sessionStorage.getItem('userData');
this.userData=this.userData2;
   }

  ngOnInit(): void {


  }
  SumbitApplication(register:quickRegister){
 
        register.deviceNumber=this.userData?.deviceNumber ?? 2
    this.AuthenticationService.quickRegister(register).subscribe((response)=>{
      if (response.success) {
        this.showPopup = true;
      
        setTimeout(() => {
          this.showPopup = false;
        }, 3000); // show for 3 seconds
  
       } 
      
      
      })
    
    }
    onFileSelected(event: any) {
      const file = event.target.files[0];
    
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          // Convert the file to a binary format
          const binaryString = reader.result as string;
          const binaryData = btoa(binaryString); // Base64 encoding
    
          // Set the binary data as the profile picture in your quickRegister object
          this._quickRegister.report = binaryData;
        };
        reader.readAsBinaryString(file);
      }
    }
    
    }
    
