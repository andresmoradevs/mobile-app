import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { News } from 'src/app/shared/News';
import { User } from 'src/app/shared/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

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
  notice: News = new News();
  suppliedData = false;

  constructor(
    public auth: AuthService,
    public db: AngularFireDatabase) {
    const user = new User();
    this.auth.user = this.user;
    console.log(''+this.user.name);

  }
  saveInfoUser() {
    console.log(this.user);

  }


}
