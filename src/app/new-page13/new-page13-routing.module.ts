import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPage13Page } from './new-page13.page';

const routes: Routes = [
  {
    path: '',
    component: NewPage13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPage13PageRoutingModule {}
