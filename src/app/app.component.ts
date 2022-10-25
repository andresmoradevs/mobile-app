import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Perfil', url: 'perfil', icon: 'person-circle' },
    { title: 'Calendario', url: 'calendario', icon: 'calendar' },
    { title: 'Asignaturas', url: 'asignaturas', icon: 'folder-open' },
    { title: 'Reuniones', url: 'reuniones', icon: 'people-circle' },
    { title: 'Exámenes', url: 'examenes', icon: 'newspaper' },
    { title: 'Estudiantes', url: 'estudiantes', icon: 'body' },
    { title: 'Profesores', url: 'profesores', icon: 'people' },
    { title: 'Acudientes', url: 'acudientes', icon: 'person' },
    { title: 'Citaciones', url: 'citaciones', icon: 'book' },
    { title: 'Reportes', url: 'reportes', icon: 'bar-chart' },
  ];
  // public labels = ['Familiares', 'Amigos', 'Notas', 'Tareas', 'Salidas', 'Recordatorios'];

  constructor(
    private router: Router,
    private alertCtr: AlertController,
    private auth: AuthService) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  );

  async logout() {
    const alert = await this.alertCtr.create({
      message: 'Esta seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          role: 'accept',
          handler: () => {
            this.auth.logout();
            // this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }
}
