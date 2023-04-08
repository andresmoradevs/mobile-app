import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import { alertController } from '@ionic/core';



@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.page.html',
  styleUrls: ['./recoverpass.page.scss'],
})
export class RecoverpassPage{

  remail: string;

  constructor(public afAuth: AngularFireAuth) { }

  async resetPassword(email: string) {
    try {
      return await this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }
  onReset(email: string) {
    if(this.remail === '') {
      //Crear alert indicando que el campo email se encuentra vacio
      console.log(this.remail);
    } else {
      console.log(this.remail);
      this.resetPassword(email);
    }
  }

}
