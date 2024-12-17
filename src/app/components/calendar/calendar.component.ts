import { Component, inject, OnInit } from '@angular/core';
import { CalendarEvent } from '../../shared/event.model';
import { DatabaseService } from '../../services/database.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-component-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  dbService = inject(DatabaseService);
  alertController = inject(AlertController);

  events: CalendarEvent[] = [];
  selectedDate: string = new Date().toISOString();
  showEventForm = false;
  currentEvent: Partial<CalendarEvent> = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    type: 'presential',
    status: 'active'
  };

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.dbService.getEvents().subscribe(
      events => {
        this.events = events;
      },
      error => {
        console.error('Error loading events:', error);
      }
    );
  }

  async addEvent() {
    if (!this.currentEvent.title || !this.currentEvent.startDate) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor complete los campos requeridos',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    try {
      await this.dbService.createEvent(this.currentEvent as CalendarEvent);
      this.resetForm();
      this.showEventForm = false;
    } catch (error) {
      console.error('Error creating event:', error);
    }
  }

  async deleteEvent(eventId: string) {
    const alert = await this.alertController.create({
      header: '¿Confirmar eliminación?',
      message: '¿Está seguro de que desea eliminar este evento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: async () => {
            try {
              await this.dbService.deleteEvent(eventId);
            } catch (error) {
              console.error('Error deleting event:', error);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  resetForm() {
    this.currentEvent = {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      type: 'presential',
      status: 'active'
    };
  }

}
