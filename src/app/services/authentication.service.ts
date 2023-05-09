import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from '../Auth/interfaces/login';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData=new BehaviorSubject(null);
  basrurl=environment.url
  constructor(private _httpClient :HttpClient ,private _Router:Router) { 

 
      // Disable SSL certificate verification
      // Only use this in development or trusted environments
      // This disables all security checks
      // Do not use in production
    if (sessionStorage.getItem('Token') != null){

      this.setUserData();
 
      }
  }
  setUserData():void{

    let encodedToken =JSON.stringify( sessionStorage.getItem('Token'));
    let decdodeToken:any =jwtDecode(encodedToken);
    this.userData.next(decdodeToken);
  }

  login(userdata:Login):Observable<any>
  {

return this._httpClient.post(this.basrurl + "Authentication/Login", userdata)

  }

}
