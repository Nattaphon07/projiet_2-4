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

  // ตรวจสอบว่าสถานะผู้ใช้คือ admin หรือไม่
  checkIfAdmin() {
    const userRole = localStorage.getItem('userRole');
    this.isAdmin = (userRole === 'admin');
    if (this.isAdmin) {
      this.presentAdminAlert(); // แสดงการแจ้งเตือนเมื่อผู้ใช้เป็นแอดมิน
    }
  }

  // แสดงการแจ้งเตือนเมื่อผู้ใช้เป็น admin
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

  // นำทางไปยังหน้าแอดมิน
  goToAdminPage() {
    this.navCtrl.navigateForward('/admin-page');
  }

  // ฟังก์ชันสำหรับการตั้งค่าผู้ใช้เป็น customer
  setAsCustomer() {
    localStorage.setItem('userRole', 'customer');
    this.navCtrl.navigateForward('/new-page13');
  }

  // ฟังก์ชันสำหรับย้อนกลับไปยังหน้า previous page
  goBack() {
    this.navCtrl.navigateBack('/new-page13');
  }

  // ฟังก์ชันสำหรับการเพิ่มเมนู
  addMenu() {
    console.log('เพิ่มเมนู');
    // เพิ่ม logic สำหรับการเพิ่มเมนูตามที่คุณต้องการได้ที่นี่
  }

  // ฟังก์ชันสำหรับการเลือกเมนู
  selectMenu(category: string) {
    console.log('เลือกหมวดหมู่:', category);
    // ใช้ logic สำหรับการเลือกหมวดหมู่
    if (category === 'อาหารคาว') {
      this.navCtrl.navigateForward('/foodcrod');
    } else if (category === 'อาหารหวาน') {
      this.navCtrl.navigateForward('/show-menu');
    } else if (category === 'เครื่องดื่ม') {
      this.navCtrl.navigateForward('/food3');
    }
  }

  // ฟังก์ชันนำทางไปยังหน้าอื่นๆ
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
