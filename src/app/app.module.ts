import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module'; // นำเข้า AppRoutingModule
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular'; // นำเข้า IonicStorageModule

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, // ระบุ AppRoutingModule ที่นี่
    IonicStorageModule.forRoot()  // เพิ่มโมดูลนี้สำหรับการตั้งค่า Storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
