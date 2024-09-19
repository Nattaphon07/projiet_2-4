import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact123Page } from './contact123.page';

describe('Contact123Page', () => {
  let component: Contact123Page;
  let fixture: ComponentFixture<Contact123Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Contact123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
