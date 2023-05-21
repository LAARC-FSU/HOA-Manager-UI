import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockInOutDialogComponent } from './clock-in-out-dialog.component';

describe('ClockInOutDialogComponent', () => {
  let component: ClockInOutDialogComponent;
  let fixture: ComponentFixture<ClockInOutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockInOutDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockInOutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
