import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoImportDialogComponent } from './photo-import-dialog.component';

describe('PhotoImportDialogComponent', () => {
  let component: PhotoImportDialogComponent;
  let fixture: ComponentFixture<PhotoImportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoImportDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoImportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
