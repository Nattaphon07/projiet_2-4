import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contact123PageRoutingModule } from './contact123-routing.module';

import { Contact123Page } from './contact123.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contact123PageRoutingModule
  ],
  declarations: [Contact123Page]
})
export class Contact123PageModule {}
