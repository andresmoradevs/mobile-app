import { Injectable } from '@angular/core';
import  { User } from '../shared/User';
import { Database, DatabaseReference, databaseInstance$, getDatabase, ref, set, get } from '@angular/fire/database';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { Storage } from '@ionic/storage-angular';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  // private _storage: Storage | null = null;


  constructor(
    private db: AngularFireDatabase,
    private storage: Storage) {
    // this.init();
  }
  // async init() {
  //   // If using, define drivers here: await this.storage.defineDriver(/*...*/);
  //   // const storage = await this.storage.create();
  //   // this.storage = storage;
  // }

  // Create and expose methods that users of this service can
  // call, for example:
  // public setTypeUserLogged(key: string, value: any) {
  //   this.storage?.set(key, value);
  // }
  // public getTypeUserLogged(key: string) {
  //   this.storage?.get(key);
  // }
}
