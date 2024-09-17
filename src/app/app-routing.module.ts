// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

// Components สำหรับการกำหนดเส้นทาง
// app-routing.module.ts


import { Food3Page } from './food3/food3.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'new-page',
    loadChildren: () => import('./new-page/new-page.module').then(m => m.NewPagePageModule)
  },
  {
    path: 'new-page12',
    loadChildren: () => import('./new-page12/new-page12.module').then(m => m.NewPage12PageModule)
  },
  {
    path: 'new-page13',
    loadChildren: () => import('./new-page13/new-page13.module').then(m => m.NewPage13PageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then(m => m.FoodPageModule)
  },
  {
    path: 'foodcrod',
    loadChildren: () => import('./foodcrod/foodcrod.module').then(m => m.FoodcrodPageModule)
  },
  {
    path: 'adminfood',
    loadChildren: () => import('./adminfood/adminfood.module').then(m => m.AdminfoodPageModule)
  },
  {
    path: 'show-menu',
    loadChildren: () => import('./show-menu/show-menu.module').then(m => m.ShowMenuPageModule)
  },
  {
    path: 'food3',
    loadChildren: () => import('./food3/food3.module').then(m => m.Food3PageModule)
  },

  // เส้นทางอื่น ๆ
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
