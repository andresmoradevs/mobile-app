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
   
      if(this.form.valid) {
        /* const { name, email, password } = this.form.getRawValue(); */
        /* this.authService.createUserRtDB(); */
        this.authService.register( this.email, this.password, this.name, this.typeUx);

      } else {
        const alert = this.alertController.create({
          message: 'Uno o más datos estan incorrectos!',
          buttons: ['OK'],
        });
        (await alert).present();
      }
    

  }

  async createStudent() {
    try{
      const newStudent = new User();

      newStudent.name = this.name;
      newStudent.lastName = this.lastName;
      newStudent.years = this.years;
      newStudent.email = this.email;
      newStudent.pass = this.password;
      newStudent.idUx = 'empty';
      newStudent.phone = 'empty';
      newStudent.typeUx = 'estudiante';
      if(this.form.valid) {
       
        this.authService.register( this.email, this.password, this.name, this.typeUx);

        this.db.list('users/estudiantes/').push(newStudent);
        const alert = this.alertController.create({
          message: 'Se registro el estudiante con éxito!',
          buttons: ['OK'],
        });
        (await alert).present();

      } else {
        const alert = this.alertController.create({
          message: 'Uno o más datos estan incorrectos!',
          buttons: ['OK'],
        });
        (await alert).present();
      }

      console.log('se agregó el usuario correctamente');

    } catch(error) {
      console.log(error);
    }
  }
  getStudents() {
    this.db.list('users/estudiantes/').valueChanges().subscribe(res => {
      this.users = res;
    });
  }
  cleanFields() {
    this.form.value.name = '';
    this.form.value.lastName = '';
    this.form.value.years = '';
    this.form.value.email = '';
    this.form.value.password = '';
  }

}
