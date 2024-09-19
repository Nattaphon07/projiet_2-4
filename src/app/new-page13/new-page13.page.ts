import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-page13',
  templateUrl: './new-page13.page.html',
  styleUrls: ['./new-page13.page.scss'],
})
export class NewPage13Page implements OnInit {
  isAdmin: boolean = false;

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  ngOnInit() {
    this.checkUserRole(); // ตรวจสอบสถานะผู้ใช้เมื่อหน้าโหลด
  }

  checkUserRole() {
    const userRole = localStorage.getItem('userRole');
    this.isAdmin = (userRole === 'admin');
    if (!this.isAdmin) {
      
    }
  }


  goBack() {
    this.navCtrl.navigateBack('/home'); // กลับไปหน้า food
  }

  navigateToPage12() {
    this.navCtrl.navigateForward('/new-page12'); // นำทางไปยังหน้า new-page12
  }

  goToNextPage() {
    this.navCtrl.navigateForward('food'); // นำทางไปยังหน้า food อีกครั้ง
  }
  goToNextPage546() {
    this.navCtrl.navigateForward('contact123'); // นำทางไปยังหน้า food อีกครั้ง
  }
}
