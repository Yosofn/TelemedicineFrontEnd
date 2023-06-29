import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login, userLoginResponse } from '../interfaces/login';
import { UserData } from '../interfaces/user-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
error='';
loginform: Login = {
  username: '',
  password: ''
};
userdata:any={
  Id: 0,
  Role: 0,
 

}
loginresponse={

  result:{

  }
}
  constructor(private Authentication : AuthenticationService,private _Router:Router ) { }

  ngOnInit(): void {

    
  }
  Sumbitlogin(loginform:Login){

    this.Authentication.login(loginform).subscribe((response)=>{
    if (response.success){
      sessionStorage.setItem('Token', response.token);
     this.userdata=   this.Authentication.decodeInformation();
this.getUserData(this.userdata);
    
    
    }
    else {
    this.error='email is already registered'
    
    }
       } ) }


 getUserData(userinformation :userLoginResponse){

  let userDataRequest:UserData={

    id :parseInt(userinformation.Id,10),
    profileStatus: userinformation.Role ? parseInt(userinformation.Role,10) : 1 
}
   this.Authentication.getUserData(userDataRequest).subscribe((response)=>{
    console.log(response.result)
    // if (response){

      sessionStorage.setItem('userData', JSON.stringify(response.result));
    
    // }
    // else {
    // console.log('error');
    
   // }
       } ) 
      
   this.Navigation(userinformation.Role)

      }


       Navigation(role:any){

        switch(role){
          
      case "2":
        this._Router.navigate(['/homedoctor']);
        break;
       case "3":
       this._Router.navigate(['/admin-register']);
       break;
       case "4":
        this._Router.navigate(['/admin-register']);
        break;
        default:
        this._Router.navigate(['/home']);
        break;

        }
       }
 }




