import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodcrodPageRoutingModule } from './foodcrod-routing.module';

import { FoodcrodPage } from './foodcrod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodcrodPageRoutingModule
  ],
  declarations: [FoodcrodPage]
})
export class FoodcrodPageModule {}
