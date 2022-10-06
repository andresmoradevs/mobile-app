import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitationsPageRoutingModule } from './citations-routing.module';

import { CitationsPage } from './citations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitationsPageRoutingModule
  ],
  declarations: [CitationsPage]
})
export class CitationsPageModule {}
