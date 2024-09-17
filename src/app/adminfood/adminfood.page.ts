import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

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

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private router: Router
  ) {}

  // Navigate back to a previous page
  goBack() {
    this.navCtrl.navigateBack('/new-page13');
  }

  // Trigger file input dialog
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  // Handle file input change and image preview
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

  // Collect the form data and navigate to the next page
// ในไฟล์ AdminfoodPage.ts
submitForm() {
  if (!this.menuName || !this.price || !this.category || !this.foodType) {
    this.alertController.create({
      header: 'Error',
      message: 'Please fill in all required fields.',
      buttons: ['OK']
    }).then(alert => alert.present());
    return;
  }

  const formData = {
    image: this.selectedImage,
    menuName: this.menuName,
    price: this.price,
    category: this.category,
    foodType: this.foodType,
  };

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

  this.router.navigate([categoryPage], { 
    queryParams: formData,
  });
}
}