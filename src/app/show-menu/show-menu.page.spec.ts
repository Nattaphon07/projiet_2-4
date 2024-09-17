import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowMenuPage } from './show-menu.page';

describe('ShowMenuPage', () => {
  let component: ShowMenuPage;
  let fixture: ComponentFixture<ShowMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
