import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  typeUx: string;

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

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required]],

  });

  constructor(
    private storage: Storage,
    private alertController: AlertController ,
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTypeUx();
  }
  async getTypeUx() {
    // await console.log(this.storage.get('typeUx'));
  }

  async login() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.auth.login(email, password)
      .then(() => {
        this.router.navigate(['/inicio']);
      })
      .catch(async error => {
          const alert = this.alertController.create({
            message: 'Uno o más datos estan incorrectos!',
            buttons: ['OK'],
          });
          (await alert).present();
        console.error(error);
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
