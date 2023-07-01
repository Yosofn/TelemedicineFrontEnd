import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import{quickRegister}from 'src/app/Auth/interfaces/register';
@Component({
  selector: 'app-quick-register',
  templateUrl: './quick-register.component.html',
  styleUrls: ['./quick-register.component.scss']
})
export class QuickRegisterComponent implements OnInit {
  _quickRegister:quickRegister={
    nationalId: 0,
    username: "",
    phone: "",
profilepicture:""

  }

  showPopup=false;
  constructor(private AuthenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
    SumbitApplication(register:quickRegister){
 
      
   
       
       this.AuthenticationService.quickRegister(register).subscribe((response)=>{
         if (response) {
           this.showPopup = true;
         
           setTimeout(() => {
             this.showPopup = false;
           }, 3000); // show for 3 seconds
     
          } 
         
         
         })
       
       }
  }


