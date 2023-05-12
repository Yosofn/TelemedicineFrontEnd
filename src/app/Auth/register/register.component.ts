import { Component, OnInit } from '@angular/core';
import { Register } from '../interfaces/register';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register:Register={
  nationalId: 0,
  username: "",
  password: "",
  age: 0,
  address: "",
  fname: "",
  lname: "",
  height: 0,
  weight: 0,
  job: "",
  phone: "",
  profileStatus: 1,
  gender: "",
  maritalStatus: ""
  }

  maritalStatuses = ['Cardiologist', 'Neurologist', 'Pediatrician', 'Surgeon', 'Psychiatrist', 'Anesthesiologist', 'Internal Medicine Physician', 'Gynecologist'];

  constructor(
    private router:Router,
    private AuthenticationService:AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  SumbitRegister(register:Register){


  this.AuthenticationService.Register(register).subscribe((response)=>{
  if (response.success){
   this.router.navigate(['/login']);
  
  
  }

     } ) }    
  }


