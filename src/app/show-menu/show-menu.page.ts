import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'; // นำเข้า NavController
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.page.html',
  styleUrls: ['./show-menu.page.scss'],
})
export class ShowMenuPage {
  selectedImage: string | ArrayBuffer | null = null;
  menuName: string = '';
  price: number | null = null;
  category: string = '';
  foodType: string = '';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create(); // Ensure storage is ready

    this.route.queryParams.subscribe(async (params) => {
      // ดึงค่าจาก queryParams (หากมี)
      this.selectedImage = params['image'] || null;
      this.menuName = params['menuName'] || '';
      this.price = params['price'] ? Number(params['price']) : null;
      this.category = params['category'] || '';
      this.foodType = params['foodType'] || '';

      // ดึงข้อมูลจาก storage หากไม่มีข้อมูลใน queryParams
      if (!params['menuName']) {
        const storedData = await this.storage.get('currentFormData');
        if (storedData) {
          this.selectedImage = storedData.selectedImage;
          this.menuName = storedData.menuName;
          this.price = storedData.price;
          this.category = storedData.category;
          this.foodType = storedData.foodType;
        }
      }
    });
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  goBack() {
    this.navCtrl.back(); // ใช้ NavController เพื่อกลับไปยังหน้าที่แล้ว
  }
}
