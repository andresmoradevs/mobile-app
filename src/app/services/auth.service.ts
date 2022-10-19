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
      return await signInWithEmailAndPassword(this.afAuth, email, password);2
  }

  login( email: string, password: string) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout() {
    return signOut(this.afAuth);
  }

}
