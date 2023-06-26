import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiatings-admin',
  templateUrl: './wiatings-admin.component.html',
  styleUrls: ['./wiatings-admin.component.scss'],
})
export class WiatingsAdminComponent implements OnInit {
  waiting: boolean = false;
  ourDoctors: boolean = true;
  toggleDoctors() {
    this.ourDoctors = !this.ourDoctors;
    this.waiting = false;
  }
  toggleWaiting() {
    this.waiting = !this.waiting;
    this.ourDoctors = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
