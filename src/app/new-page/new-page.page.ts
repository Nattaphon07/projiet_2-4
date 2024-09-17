import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage {
  username: string = 'psc'; // ตัวแปรสำหรับชื่อผู้ใช้
  password: string = 'psc123'; // ตัวแปรสำหรับรหัสผ่าน

  correctUsername: string = 'psc'; // ชื่อผู้ใช้ที่ถูกต้อง
  correctPassword: string = 'psc123'; // รหัสผ่านที่ถูกต้อง

  constructor(private navCtrl: NavController) {}

  // ฟังก์ชันในการตรวจสอบชื่อผู้ใช้และรหัสผ่าน
  checkCredentials() {
    if (this.username === this.correctUsername && this.password === this.correctPassword) {
      alert('เข้าสู่ระบบเรียบร้อยแล้ว');

      // เก็บสถานะผู้ใช้ว่าเป็นแอดมินใน localStorage
      localStorage.setItem('userRole', 'admin'); 

      // นำทางไปยังหน้า new-page13
      this.navCtrl.navigateForward('/new-page13');
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  }}