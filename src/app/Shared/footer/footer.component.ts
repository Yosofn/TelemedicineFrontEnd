import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentLang!:string
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.currentLang = localStorage.getItem("CurrentLang") || "en";
    this.translate.use(this.currentLang)

  }
  changeCurrentLang(lang:string){
    this.translate.use(lang);
    localStorage.setItem("CurrentLang" , lang)
    }
}
