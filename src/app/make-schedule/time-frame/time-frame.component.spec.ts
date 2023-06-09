import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFrameComponent } from './time-frame.component';

describe('TimeFrameComponent', () => {
  let component: TimeFrameComponent;
  let fixture: ComponentFixture<TimeFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
