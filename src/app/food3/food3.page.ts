import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-food3',
  templateUrl: './food3.page.html',
  styleUrls: ['./food3.page.scss'],
})
export class Food3Page implements OnInit {
  selectedImage: string | ArrayBuffer | null = null;
  menuName: string = '';
  price: number | null = null;
  category: string = '';
  foodType: string = '';
  menuList: any[] = [];
  isAdmin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();
    await this.checkUserRole();

    const existingMenuList = await this.storage.get('menuList');
    if (existingMenuList) {
      this.menuList = existingMenuList;
    }

    this.route.queryParams.subscribe(params => {
      this.selectedImage = params['image'] || null;
      this.menuName = params['menuName'] || '';
      this.price = params['price'] ? Number(params['price']) : null;
      this.category = params['category'] || '';
      this.foodType = params['foodType'] || '';

      this.saveDataToStorage();
    });
  }

  async checkUserRole() {
    const userRole = localStorage.getItem('userRole');
    this.isAdmin = userRole === 'admin';
  }

  async saveDataToStorage() {
    const newMenu = {
      image: this.selectedImage,
      menuName: this.menuName,
      price: this.price,
      category: this.category,
      foodType: this.foodType
    };

    this.menuList.push(newMenu);
    await this.storage.set('menuList', this.menuList);
  }

  foodcrod() {
    this.navCtrl.navigateForward('/adminfood');
  }

  goBack() {
    this.navCtrl.navigateBack('/food');
  }
}
