import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.goTop();
  }

  goTop(){
    $(".go-top").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });
  }
}
