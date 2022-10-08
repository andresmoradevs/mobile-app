import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000
    }
  }

  banners: string[] = ["assets/img/banners_1.jpg", "assets/img/banners_2.jpg", "assets/img/banners_3.jpg"]

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.min(8), Validators.required]],

  });
  
  constructor(private formBuilder: FormBuilder, 
    private alertController: AlertController,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }
  async register() {
    if(this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.authService.register( email, password);
    } else {
      const alert = this.alertController.create({
        message: 'Uno o más datos estan incorrectos!',
        buttons: ['OK'],
      });
      (await alert).present();
    }
    // if(this.form.valid) {
    //   const { email, password } = this.form.getRawValue();
    //   console.log(email, password);
    //   this.authService.register(email, password)
    //     .then((user) => {
    //       this.router.navigate(['/inicio']);
    //   }).catch(err => {
    //     this.router.navigate(['/register']);
    //   }); 
    // } else {
    //   // this.form.markAllAsTouched();
    //   this.router.navigate(['/register']);
    //   const alert = this.alertController.create({
    //     message: 'Uno o más datos estan incorrectos!',
    //     buttons: ['OK'],
    //   });
    //   (await alert).present();
    // }
  }

}
