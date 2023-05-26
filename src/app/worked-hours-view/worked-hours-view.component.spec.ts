import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedHoursViewComponent } from './worked-hours-view.component';

describe('WorkedHoursViewComponent', () => {
  let component: WorkedHoursViewComponent;
  let fixture: ComponentFixture<WorkedHoursViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkedHoursViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkedHoursViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
