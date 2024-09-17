import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  isAdmin: boolean = false;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.checkIfAdmin(); // ตรวจสอบสถานะผู้ใช้เมื่อหน้าโหลด
  }

  checkIfAdmin() {
    const userRole = localStorage.getItem('userRole');
    this.isAdmin = (userRole === 'admin');
    if (this.isAdmin) {
      this.presentAdminAlert(); // แสดงแจ้งเตือนเมื่อผู้ใช้เป็นแอดมิน
    }
  }

  async presentAdminAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'คุณเป็นแอดมิน',
      buttons: ['ตกลง']
    });
    await alert.present();
  }

  // ฟังก์ชันสำหรับการลงชื่อออก
  async logout() {
    localStorage.removeItem('userRole'); // ลบข้อมูลสถานะผู้ใช้

    // แสดงการแจ้งเตือนก่อนที่จะนำทางไปยังหน้า home
    const alert = await this.alertController.create({
      header: 'ออกจากระบบ',
      message: 'คุณได้ออกจากระบบเรียบร้อยแล้ว',
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.navCtrl.navigateRoot('/home'); // นำทางไปยังหน้า home
        }
      }]
    });

    await alert.present();
  }

  goToAdminPage() {
    this.navCtrl.navigateForward('/admin-page');
  }

  setAsCustomer() {
    localStorage.setItem('userRole', 'customer');
    this.navCtrl.navigateForward('/new-page13');
  }

  goBack() {
    this.navCtrl.navigateBack('/new-page13');
  }
  foodcrod() {
    this.navCtrl.navigateForward('/foodcrod');
  }
  adminfood() {
    this.navCtrl.navigateForward('/adminfood');
  }
  showmenu() {
    this.navCtrl.navigateForward('/show-menu');
  }
  showmenu12wd() {
    this.navCtrl.navigateForward('/food3');
  }
}
