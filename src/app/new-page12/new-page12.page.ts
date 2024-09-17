import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-page12',
  templateUrl: './new-page12.page.html',
  styleUrls: ['./new-page12.page.scss'],
})
export class NewPage12Page {

  constructor(private navCtrl: NavController) { }

  someMethod() {
    this.navCtrl.navigateBack('/new-page13');
  }
}
