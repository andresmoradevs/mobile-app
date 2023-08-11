import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  highlightedDates = (isoString) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();

    if(utcDay % 5 === 0) {
      return {
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
      };
    }

    if(utcDay % 3 === 0) {
      return {
        textColor: 'var(--ion-color-secondary-contrast)',
        backgroundColor: 'var(--ion-color-secondary)',
      };
    }

    return undefined;
  };

  constructor() { }

  ngOnInit() {
  }

}
