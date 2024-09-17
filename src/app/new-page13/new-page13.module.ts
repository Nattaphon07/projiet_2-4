import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPage13PageRoutingModule } from './new-page13-routing.module';

import { NewPage13Page } from './new-page13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPage13PageRoutingModule
  ],
  declarations: [NewPage13Page]
})
export class NewPage13PageModule {}
