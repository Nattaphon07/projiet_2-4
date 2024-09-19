import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contact123Page } from './contact123.page';

const routes: Routes = [
  {
    path: '',
    component: Contact123Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contact123PageRoutingModule {}
