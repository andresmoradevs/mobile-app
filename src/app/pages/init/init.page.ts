import { AuthService } from './../../services/auth.service';
import { RegisterPage } from './../register/register.page';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@lottiefiles/lottie-player';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/User';

@Component({
  selector: 'app-init-page',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage {

  cardGoTo: string;

  user: User = {
    email : '',
    name: '',
    lastName: '',
    years: '',
    pass: '',
    typeUx: '',
    idUx: '',
    phone: ''
  };//Declaramos un user vacio

  constructor(
    public auth: AuthService,
    private router: Router,
    private navCtrl: NavController,
    private store: Storage
  ) {
    this.auth.user = this.user;
    console.log(this.user.name);

  }

}
