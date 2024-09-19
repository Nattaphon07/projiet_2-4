import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.page.html',
  styleUrls: ['./show-menu.page.scss'],
})
export class ShowMenuPage implements OnInit {
  selectedImage: string | ArrayBuffer | null = null;
  menuName: string = '';
  price: number | null = null;
  category: string = '';
  foodType: string = '';
  isAdmin: boolean = false;  // เพิ่มตัวแปรนี้

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedImage = params['image'] || null;
      this.menuName = params['menuName'] || '';
      this.price = params['price'] ? Number(params['price']) : null;
      this.category = params['category'] || '';
      this.foodType = params['foodType'] || '';
    });

    this.checkUserRole(); // ตรวจสอบสถานะผู้ใช้เมื่อเริ่มต้น
  }

  async checkUserRole() {
    const userRole = localStorage.getItem('userRole');
    this.isAdmin = userRole === 'admin'; // ตั้งค่าตัวแปร isAdmin ตามสถานะผู้ใช้
  }

  foodcrod() {
    this.navCtrl.navigateForward('/adminfood');
  }

  goBack() {
    this.navCtrl.navigateBack('/food');
  }
}
