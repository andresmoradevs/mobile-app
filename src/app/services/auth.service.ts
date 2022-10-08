import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authState$ = authState(this.afAuth);

  constructor(private router: Router,private afAuth: Auth, private alertController: AlertController) { }

  async register(email: string, password: string) {
      const user = await createUserWithEmailAndPassword(this.afAuth, email, password);
      return await signInWithEmailAndPassword(this.afAuth, email, password);
    // try {
    //   const user = await createUserWithEmailAndPassword(this.afAuth, email, password);
    //   this.router.navigate(['/inicio']);
    //   return await signInWithEmailAndPassword(this.afAuth, email, password);
      
    // }catch(err) {
    //   const alert = this.alertController.create({
    //     message: 'Uno o más datos estan incorrectos o el usuario ya se encuentra registrado!',
    //     buttons: ['OK'],
    //   });
    //   (await alert).present();
    //   console.error(err);
    // }
  }

  login(email: string, password: string) {
    // try {
      // this.router.navigate(['/inicio']);
      return signInWithEmailAndPassword(this.afAuth, email, password);
    // }catch(err) {
      // const alert = this.alertController.create({
      //   message: 'Uno o más datos estan incorrectos o el usuario ya se encuentra registrado!',
      //   buttons: ['OK'],
      // });
      // (await alert).present();
    //   console.error(err);
    // }
  }

  logout() {
    return signOut(this.afAuth);
  }
  
}
