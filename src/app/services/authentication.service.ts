import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from '../Auth/interfaces/login';
import { UserData } from '../Auth/interfaces/user-data';
import { Register, quickRegister, registerDoctor } from '../Auth/interfaces/register';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginform: Login = {
    username: '',
    password: ''
  };  basrurl=environment.url
  constructor(private _httpClient :HttpClient ,private _Router:Router) { 

 
  
    if (sessionStorage.getItem('Token') != null){

      this.decodeInformation();
 
      }
  }
  decodeInformation():any{

    let encodedToken =JSON.stringify( sessionStorage.getItem('Token'));
    let decodedToken  =jwtDecode(encodedToken);
 
    return decodedToken;
    
  }

  login(login:Login):Observable<any>
  {

return this._httpClient.post(this.basrurl + "Authentication/Login", login)

  }

  Register(register:Register):Observable<any>
  {

return this._httpClient.post(this.basrurl + "Authentication/Registration", register)

  }

  doctorRegister(register:registerDoctor):Observable<any>
  {

return this._httpClient.post(this.basrurl + "Authentication/JoinOurTeam", register)

  }

  quickRegister(register:quickRegister):Observable<any>
  {

return this._httpClient.post(this.basrurl + "Authentication/QuickRegister", register)

  }


  getUserData(userData:UserData):Observable<any>{

    return this._httpClient.post(this.basrurl + "UserInformation/GetUserInformation", userData)


  }

}
