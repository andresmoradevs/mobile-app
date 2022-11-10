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

  authState$ = authState(this.afAuth);


  constructor(
    private dbFire: AngularFirestore,
    private dbRt: AngularFireDatabase,
    private router: Router,
    private afAuth: Auth,
    private alertController: AlertController) { }

  async register(email: string, password: string, name: string, typeUx: string) {

    const userR = await createUserWithEmailAndPassword(this.afAuth, email, password);

    const uidKey = userR.user.uid;
    const newUser = new User();

    newUser.name = name;
    newUser.lastName = '';
    newUser.years = '';
    newUser.email = email;
    newUser.pass = password;
    newUser.idUx = uidKey;
    newUser.phone = '';
    newUser.typeUx = typeUx;

    this.user.name = newUser.name;
    this.user.lastName = newUser.lastName;
    this.user.years = newUser.years;
    this.user.email = newUser.email;
    this.user.pass = newUser.pass;
    this.user.idUx = newUser.idUx;
    this.user.phone = 'empty';
    this.user.typeUx = newUser.typeUx;

    //this.dbRt.list('users/'+typeUx+'s'+'/').push(uidKey);
    this.dbRt.object('users/'+typeUx+'s'+'/'+uidKey+'/').set(newUser);

    console.log('se agregó el usuario correctamente');

    this.router.navigate(['/inicio', this.user]);
    return await signInWithEmailAndPassword(this.afAuth, email, password);
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
