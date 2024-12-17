import { inject, Injectable } from '@angular/core';
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
import { CalendarEvent } from '../shared/event.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbPath = '/events';
  private dbNotices = '/notices';

  database = inject(AngularFireDatabase);

  // Crear nuevo evento
  createEvent(event: CalendarEvent): Promise<any> {
    return this.database.list(this.dbPath).push({
      ...event,
      createdAt: new Date().toISOString()
    }).then(ref => ref);
  }

  // Obtener todos los eventos
  getEvents(): Observable<CalendarEvent[]> {
    return this.database.list<CalendarEvent>(this.dbPath)
      .snapshotChanges()
      .pipe(
        map(changes => 
          changes.map(c => ({
            id: c.payload.key!, 
            ...c.payload.val()
          }))
        )
      );
  }

  // Obtener evento por ID
  getEventById(id: string): Observable<CalendarEvent> {
    return this.database.object<CalendarEvent>(`${this.dbPath}/${id}`).valueChanges();
  }

  // Actualizar evento
  updateEvent(id: string, data: Partial<CalendarEvent>): Promise<void> {
    return this.database.object(`${this.dbPath}/${id}`).update(data);
  }

  // Eliminar evento
  deleteEvent(id: string): Promise<void> {
    return this.database.object(`${this.dbPath}/${id}`).remove();
  }

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
