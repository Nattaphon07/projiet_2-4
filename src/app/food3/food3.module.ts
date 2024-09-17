import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Food3PageRoutingModule } from './food3-routing.module';

import { Food3Page } from './food3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Food3PageRoutingModule
  ],
  declarations: [Food3Page]
})
export class Food3PageModule {}
