import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodcrodPage } from './foodcrod.page';

const routes: Routes = [
  {
    path: '',
    component: FoodcrodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodcrodPageRoutingModule {}
