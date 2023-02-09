import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.bannerSlider()
  }

  bannerSlider(){
    $(".banner-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      items: 1,
      autoplay: true,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      navText: [
        '<i class="ri-arrow-left-line"></i>',
        '<i class="ri-arrow-right-line"></i>',
      ],
    });
  }
}
