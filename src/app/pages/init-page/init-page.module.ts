import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitPagePageRoutingModule } from './init-page-routing.module';

import { InitPagePage } from './init-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitPagePageRoutingModule
  ],
  declarations: [InitPagePage]
})
export class InitPagePageModule {}
