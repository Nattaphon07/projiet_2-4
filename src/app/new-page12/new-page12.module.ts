import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPage12PageRoutingModule } from './new-page12-routing.module';

import { NewPage12Page } from './new-page12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPage12PageRoutingModule
  ],
  declarations: [NewPage12Page]
})
export class NewPage12PageModule {}
