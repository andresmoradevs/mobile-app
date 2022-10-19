import { Injectable } from '@angular/core';
import  { User } from '../shared/User';
import { Database, DatabaseReference, databaseInstance$, getDatabase, ref, set, get } from '@angular/fire/database';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //authState$ = authState(this.afAuth);

  constructor(
    // private db: AngularFireDatabase, private user: User, private afAuth: Auth
    ) { }

  // createUser(user: User) {
  //   return this.db.database.ref("/Users").push({
  //     uid: user.$uid,
  //     name: user.name,
  //     email: user.email
  //   });
  // }
}
