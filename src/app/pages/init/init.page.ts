import { RegisterPage } from './../register/register.page';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@lottiefiles/lottie-player';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-page',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {

  cardGoTo: string;

  user = {
    email: '',
    idUx: '',
    lastName: '',
    name: '',
    phone: '',
    typeUx: ''
  }; //Declaramos un user vacio

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private store: Storage
  ) {
    // this.user.typeUx =
  }

  ngOnInit() {
    // this.store.create();
  }

  goTo(cardGoTo) {
    this.cardGoTo = cardGoTo || 'No se encontró tipo de usuario al ingresar';
    this.router.navigateByUrl('/register', cardGoTo);
    // this.navCtrl.navigateForward('/register', cardGoTo);
  }
  // async setTypeUx() {
  //   await this.store.set('typeUx', this.cardGoTo);
  // }
}
