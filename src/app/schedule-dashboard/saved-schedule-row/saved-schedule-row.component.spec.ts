import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedScheduleRowComponent } from './saved-schedule-row.component';

describe('SavedScheduleRowComponent', () => {
  let component: SavedScheduleRowComponent;
  let fixture: ComponentFixture<SavedScheduleRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedScheduleRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedScheduleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
