import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftMakerComponent } from './shift-maker.component';

describe('ShiftMakerComponent', () => {
  let component: ShiftMakerComponent;
  let fixture: ComponentFixture<ShiftMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
