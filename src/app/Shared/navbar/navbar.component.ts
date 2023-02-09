import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public translate: TranslateService) {}
currentLang!:string
  ngOnInit(): void {
    this.openMenuMobile();
    this.currentLang = localStorage.getItem("CurrentLang") || "en";
    this.translate.use(this.currentLang)
  }

  openMenuMobile() {
    $('.others-option-for-responsive .dot-menu').on('click', function () {
      $('.others-option-for-responsive .container .container').toggleClass(
        'active'
      );
    });
  }
changeCurrentLang(lang:string){
this.translate.use(lang);
localStorage.setItem("CurrentLang" , lang)
}

}
