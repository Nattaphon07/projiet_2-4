import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodcrodPage } from './foodcrod.page';

describe('FoodcrodPage', () => {
  let component: FoodcrodPage;
  let fixture: ComponentFixture<FoodcrodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcrodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
