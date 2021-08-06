import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchFontsComponent } from './fetch-fonts.component';

describe('FetchFontsComponent', () => {
  let component: FetchFontsComponent;
  let fixture: ComponentFixture<FetchFontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchFontsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchFontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
