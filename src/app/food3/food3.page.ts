import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create(); // Ensure storage is ready

    this.route.queryParams.subscribe(async (params) => {
      this.selectedImage = params['image'] || null;
      this.menuName = params['menuName'] || '';
      this.price = params['price'] ? Number(params['price']) : null;
      this.category = params['category'] || '';
      this.foodType = params['foodType'] || '';

      // Load data from storage if necessary
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

  goBack() {
    this.navCtrl.navigateBack('/food'); // Use NavController to navigate back to the 'food' page
  }
}
