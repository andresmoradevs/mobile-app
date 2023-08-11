import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from 'src/app/shared/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {

  user: User;
  name = '';
  lastName = '';
  email = '';
  password = '';
  years = '';
  typeUx = '';

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
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.min(8), Validators.required]],

  });

  constructor(
    // public usr: User,
    public db: AngularFireDatabase,
    private dataService: DatabaseService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService) {
      this.typeUx = this.route.snapshot.paramMap.get('typeUser');

     }

  ngOnInit() {}
  async register() {
    try {

      if(this.form.valid) {
        /* const { name, email, password } = this.form.getRawValue(); */
        /* this.authService.createUserRtDB(); */
        this.authService.register( this.email, this.password, this.name, this.typeUx);

      } else {
        const alert = this.alertController.create({
          message: 'Uno o más datos estan incorrectos!',
          buttons: ['OK'],
        });
        (await alert).present();
      }
    } catch (error) {
      console.log(error);
      
    }

  }
}
