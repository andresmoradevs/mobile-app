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
import { News } from '../shared/News';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dbNotices = '/notices';

  myNoticesRef: AngularFireList<News>;

  constructor(
    private db: AngularFireDatabase,
    private storage: Storage) 
  {
    // Constructor content
    this.myNoticesRef = db.list(this.dbNotices);

  }

  getAllNews(): AngularFireList<News> {
    return this.myNoticesRef;
  }

  createNotice(notice: News): any {
    return this.myNoticesRef.push(notice);
  }

  updateNotice(id: string, value: any): Promise<void> {
    return this.myNoticesRef.update(id, value);
  }

  deleteNotice(id: string): Promise<void> {
    return this.myNoticesRef.remove(id);
  }
  deleteAllNews(): Promise<void> {
    return this.myNoticesRef.remove();
  }

}
