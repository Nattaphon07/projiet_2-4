import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Food3Page } from './food3.page';

const routes: Routes = [
  {
    path: '',
    component: Food3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Food3PageRoutingModule {}
