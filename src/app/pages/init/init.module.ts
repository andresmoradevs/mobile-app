import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitRoutingModule } from './init-routing.module';

import { InitPage } from './init.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitRoutingModule
  ],
  declarations: [InitPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class InitPageModule {}
