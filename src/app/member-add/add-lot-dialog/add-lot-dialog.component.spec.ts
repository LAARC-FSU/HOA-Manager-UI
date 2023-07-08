import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLotDialogComponent } from './add-lot-dialog.component';

describe('AddLotDialogComponent', () => {
  let component: AddLotDialogComponent;
  let fixture: ComponentFixture<AddLotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLotDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
