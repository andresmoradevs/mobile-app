import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { News } from 'src/app/shared/News';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  nameUser: string;
  notice: News = new News();
  suppliedData = false

  constructor(public db: AngularFireDatabase) { 
    
  }
  saveInfoUser() {
    console.log(this.nameUser);
    
  }
  

}
