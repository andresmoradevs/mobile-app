import { ref } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from 'src/app/shared/User';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  user: User;

  users: any;

  name = '';
  lastName = '';
  years = '';
  email = '';
  password = '';
  typeUx: string;

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    years: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.min(8), Validators.required]],

  });


  constructor(
    private db: AngularFireDatabase,
    private dataService: DatabaseService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService) {
      this.typeUx = this.route.snapshot.paramMap.get('typeUser');
      this.getStudents();
     }

  ngOnInit() {
  }
  async register() {
    try {

      if(this.form.valid) {
        /* const { name, email, password } = this.form.getRawValue(); */
        /* this.authService.createUserRtDB(); */
        this.authService.register( this.email, this.password, this.name);

      } else {
        const alert = this.alertController.create({
          message: 'Uno o más datos estan incorrectos!',
          buttons: ['OK'],
        });
        (await alert).present();
      }
    } catch (error) {
      console.log(error);
    }

  }

  createStudent() {
    try{
      const newStudent = new User();

      newStudent.name = this.name;
      newStudent.lastName = this.lastName;
      newStudent.years = this.years;
      newStudent.email = this.email;
      newStudent.pass = this.password;
      newStudent.idUx = 'empty';
      newStudent.phone = 'empty';
      newStudent.typeUx = 'empty';

      this.db.list('users/students/').push(newStudent);

      console.log('se agregó el usuario correctamente');

    } catch(error) {
      console.log(error);
    }
  }
  getStudents() {
    this.db.list('users/students/').valueChanges().subscribe(res => {
      this.users = res;
    });
  }

}
