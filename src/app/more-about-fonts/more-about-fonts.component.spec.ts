import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutFontsComponent } from './more-about-fonts.component';

describe('MoreAboutFontsComponent', () => {
  let component: MoreAboutFontsComponent;
  let fixture: ComponentFixture<MoreAboutFontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAboutFontsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAboutFontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
