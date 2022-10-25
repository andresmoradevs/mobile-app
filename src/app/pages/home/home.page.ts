import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000
    }
  };

  banners: string[] = ['assets/img/banners_1.jpg', 'assets/img/banners_2.jpg', 'assets/img/banners_3.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
