import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsPageRoutingModule } from './students-routing.module';

import { StudentsPage } from './students.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    IonicModule,
    StudentsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StudentsPage]
})
export class StudentsPageModule {}
