import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

// Interface สำหรับข้อมูลรายการเมนู
interface MenuItem {
  image: string | ArrayBuffer | null;
  menuName: string;
  price: number | null;
  category: string;
  foodType: string;
}

@Component({
  selector: 'app-foodcrod',
  templateUrl: './foodcrod.page.html',
  styleUrls: ['./foodcrod.page.scss'],
})
export class FoodcrodPage implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  selectedImage: string | ArrayBuffer | null = null;
  menuName: string = '';
  price: number | null = null;
  category: string = '';
  foodType: string = '';

  items = [{
      id: 1,
      price: '',
      category: '',
      foodType: '',
      selectedImage: '',
  }];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private storage: Storage,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.storage.create();

    this.route.queryParams.subscribe(async params => {
      this.selectedImage = params['image'] || null;
      this.menuName = params['menuName'] || '';
      this.price = params['price'] ? Number(params['price']) : null;
      this.category = params['category'] || '';
      this.foodType = params['foodType'] || '';

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

  async goBack() {
    await this.saveCurrentData();
    this.navCtrl.navigateBack('/food');
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

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  async saveCurrentData() {
    const currentData = {
      selectedImage: this.selectedImage,
      menuName: this.menuName,
      price: this.price,
      category: this.category,
      foodType: this.foodType
    };
    await this.storage.set('currentFormData', currentData);
  }

  async saveData() {
    const newItem: MenuItem = {
      image: this.selectedImage,
      menuName: this.menuName,
      price: this.price,
      category: this.category,
      foodType: this.foodType
    };

    // ดึงข้อมูลที่จัดเก็บไว้จาก Storage
    let storedData = await this.storage.get('menuData');
    let categories: { [key: string]: MenuItem[] } = storedData || {};

    // ตรวจสอบให้แน่ใจว่าหมวดหมู่มีอยู่
    if (!categories[this.category]) {
      categories[this.category] = [];
    }

    // อัปเดตรายการที่มีอยู่หรือเพิ่มรายการใหม่
    const existingIndex = categories[this.category].findIndex((item: MenuItem) => item.menuName === newItem.menuName);
    if (existingIndex > -1) {
      categories[this.category][existingIndex] = newItem; // อัปเดตรายการที่มีอยู่
    } else {
      categories[this.category].push(newItem); // เพิ่มรายการใหม่
    }

    // บันทึกข้อมูลที่อัปเดตลงใน Storage
    await this.storage.set('menuData', categories);

    // ลบข้อมูลชั่วคราว
    await this.storage.remove('currentFormData');

    // รีเซ็ตฟิลด์ในฟอร์ม
    this.selectedImage = null;
    this.menuName = '';
    this.price = null;
    this.category = '';
    this.foodType = '';

    // นำทางไปยังหน้าที่ต้องการ
    this.router.navigate(['/เพิ่มข้อมูลเพิ่มเติม']);
  }

  // ฟังก์ชันเพิ่มรายการใหม่
  addNewItems(count: number) {
    for (let i = 0; i < count; i++) {
      const newItem = {
        id: this.items.length + 1, // เพิ่ม ID ต่อจากรายการล่าสุด
        price: '',
        category: '',
        foodType: '',
        selectedImage: '',
      };
      this.items.push(newItem); // เพิ่ม item ใหม่ลงในอาเรย์
    }
  }
}
