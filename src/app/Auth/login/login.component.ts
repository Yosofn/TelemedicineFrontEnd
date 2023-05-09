import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from '../interfaces/login';

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
  constructor(private Authentication : AuthenticationService,private _Router:Router ) { }

  ngOnInit(): void {

    
  }
  Sumbitlogin(loginform:Login){

    this.Authentication.login(loginform).subscribe((response)=>{
    if (response.success){
      sessionStorage.setItem('Token', response.token);
      this.Authentication.setUserData();
    this._Router.navigate(['/home']);
    
    
    }
    else {
    this.error='email is already registered'
    
    }
       } ) }
}
