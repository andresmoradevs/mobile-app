import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitPagePage } from './init-page.page';

const routes: Routes = [
  {
    path: '',
    component: InitPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitPagePageRoutingModule {}
