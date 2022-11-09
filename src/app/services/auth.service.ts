import { User } from './../shared/User';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { AngularFireDatabase,  } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: User;

  authState$ = authState(this.afAuth);
  email: any;
  name: any;

  constructor(
    private dbFire: AngularFirestore,
    private dbRt: AngularFireDatabase,
    private router: Router,
    private afAuth: Auth,
    private alertController: AlertController) { }

  async register(email: string, password: string, name: string) {

    const user = await createUserWithEmailAndPassword(this.afAuth, email, password);

    const uidKey = user.user.uid;
    /* this.user.idUx = uidKey; */
    console.log(uidKey, name);

    /* this.createUserRtDB(); */

    this.router.navigate(['/inicio']);
    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }

  createUserRtDB() {

    /* userObj.push(this.user.values); */
  }
  createUserFireDB() {
    /* const usersRefDb = this.dbFire.object('users');
    const uidKey = this.dbFire.createPushId;
    usersRefDb.set(uidKey); */
  }

  login( email: string, password: string) {
    // this.saveUser(user);
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout() {
    this.router.navigate(['/init']);
    return signOut(this.afAuth);
  }
}
