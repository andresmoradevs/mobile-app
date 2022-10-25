import { User } from './../shared/User';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user = [];

  authState$ = authState(this.afAuth);
  email: any;
  name: any;

  constructor(
    // private dbRef: DatabaseReference,
    private db: AngularFireDatabase,
    private router: Router,
    private afAuth: Auth,
    private alertController: AlertController) { }

  async register(email: string, password: string) {

    const user = await createUserWithEmailAndPassword(this.afAuth, email, password);
    // const uid = user.user.uid;

    this.createUser();


    // const listRef = this.db.list('/users');
    // listRef.push(user);
    // const itemRef = this.db.list('/users');
    // itemRef.push(user);
    this.router.navigate(['/inicio']);
    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }

  async createUser() {
    const usersRef = await this.db.object('users');
    // usersRef.set();
    console.log(usersRef);

  }

  login( email: string, password: string) {
    // this.saveUser(user);
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout() {
    this.router.navigate(['/init']);
    return signOut(this.afAuth);
  }

  // public getUsers(){
  //   return this.db.list('users/').valueChanges();
  //   //Esta función devolverá todos los datos que tengamos en el apartado users, en nuestra base de datos
  // }
  // // public saveUser(user){
  // //   const key = this.db.list('/users/').push(user).key;
  // //   //Guardamos el user y obetenemos el id que firebase pone al modulo de nuestro user.
  // //   //Al guardarse sin id nuestro user, ahora la actualizamos con el id que firebase nos devuelve.
  // //   user.id = key;
  // //   this.db.database.ref('users/'+user.id).set(user);

  // // }
  // public saveUser(user){
  //   const key = this.db.app.name.
  //   //Guardamos el user y obetenemos el id que firebase pone al modulo de nuestro user.
  //   //Al guardarse sin id nuestro user, ahora la actualizamos con el id que firebase nos devuelve.
  //   user.id = key;
  //   this.db.database.ref('users/'+user.id).set(user);

  // }
  // public updateUser(user){
  //   //Actualizamos la fruta con el id que recibimos del objeto del parametro
  //   this.db.database.ref('users/'+user.id).set(user);
  // }
  // public getUser(id){
  //   return this.db.object('users/'+id).valueChanges();
  //   //Devolvera la fruta con el id que le pasamos por parametro
  // }
  // public removeUser(id){
  //   this.db.database.ref('users/'+id).remove();
  //   //Borrará el user con el id que le pasamos por parametro
  // }

}
