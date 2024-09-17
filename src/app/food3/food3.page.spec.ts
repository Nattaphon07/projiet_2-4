import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Food3Page } from './food3.page';

describe('Food3Page', () => {
  let component: Food3Page;
  let fixture: ComponentFixture<Food3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Food3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
