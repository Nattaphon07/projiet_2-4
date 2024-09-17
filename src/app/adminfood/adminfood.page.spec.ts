import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminfoodPage } from './adminfood.page';

describe('AdminfoodPage', () => {
  let component: AdminfoodPage;
  let fixture: ComponentFixture<AdminfoodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
