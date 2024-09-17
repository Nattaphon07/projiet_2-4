import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPage12Page } from './new-page12.page';

const routes: Routes = [
  {
    path: '',
    component: NewPage12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPage12PageRoutingModule {}
