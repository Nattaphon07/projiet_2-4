import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-adminfood',
  templateUrl: './adminfood.page.html',
  styleUrls: ['./adminfood.page.scss'],
})
export class AdminfoodPage {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
  selectedImage: string | ArrayBuffer | null = null;
  menuName: string = '';
  price: number | null = null;
  category: string = '';
  foodType: string = '';
  menuList: any[] = [];
  isLoggedIn: boolean = false; // Track if the user is logged in

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.checkLoginStatus(); // Check login status on component initialization
  }

  async ionViewWillEnter() {
    const existingMenuList = await this.storage.get('menuList');
    if (existingMenuList) {
      this.menuList = existingMenuList;
    }
  }

  async checkLoginStatus() {
    // Implement your login check logic here. Example:
    const loggedInStatus = await this.storage.get('loggedIn'); // or another authentication check
    this.isLoggedIn = !!loggedInStatus;
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async submitForm() {
    if (!this.isLoggedIn) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'You must be logged in to submit a form.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (!this.menuName || !this.price || !this.category || !this.foodType) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please fill in all required fields.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const formData = {
      image: this.selectedImage,
      menuName: this.menuName,
      price: this.price,
      category: this.category,
      foodType: this.foodType,
    };

    this.menuList.push(formData);
    await this.storage.set('menuList', this.menuList);

    let categoryPage = '';
    switch (this.category) {
      case 'หมวดหมู่1':
        categoryPage = '/foodcrod';
        break;
      case 'หมวดหมู่2':
        categoryPage = '/show-menu';
        break;
      case 'หมวดหมู่3':
        categoryPage = '/food3';
        break;
      default:
        categoryPage = '/default-category';
    }

    this.router.navigate([categoryPage], { queryParams: formData });
  }

  goBack() {
    this.navCtrl.back(); // Navigate back in the history stack
  }
}
