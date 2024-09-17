import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgZone } from '@angular/core'; // NgZone for change detection

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController, private ngZone: NgZone) {}

  ngOnInit() {
    // Initialization logic here
  }

  navigateToNewPage() {
    this.navCtrl.navigateForward('/new-page');
  }

  navigateToNewPage13() {
    this.navCtrl.navigateForward('/new-page13');
  }

  goBack() {
    this.navCtrl.back(); // Navigate back to the previous page in history
  }

  handleRefresh(event: any) {
    // Add necessary logic here, e.g., reloading data or refreshing content
    setTimeout(() => {
      event.target.complete(); // Complete the refresh after 1 second
    }, 500); // Reduced refresh delay to 1 second for a faster user experience
  }
}
