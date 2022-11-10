import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/User';

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
  user: User = {
    email : '',
    name: '',
    lastName: '',
    years: '',
    pass: '',
    typeUx: '',
    idUx: '',
    phone: ''
  };

  banners: string[] = ['assets/img/banners_1.jpg', 'assets/img/banners_2.jpg', 'assets/img/banners_3.jpg'];

  constructor(private route: ActivatedRoute) {
    //this.user = this.route.snapshot.paramMap.get('typeUser');
   }

  ngOnInit() {
  }

}
