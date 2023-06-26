import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-admin',
  templateUrl: './payment-admin.component.html',
  styleUrls: ['./payment-admin.component.scss'],
})
export class PaymentAdminComponent implements OnInit {
  toggleImage: boolean = false;
  toggle() {
    this.toggleImage = !this.toggleImage;
  }
  constructor() {}

  ngOnInit(): void {}
}
