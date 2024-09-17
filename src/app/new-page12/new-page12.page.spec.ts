import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPage12Page } from './new-page12.page';

describe('NewPage12Page', () => {
  let component: NewPage12Page;
  let fixture: ComponentFixture<NewPage12Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPage12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
