import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCredentialsMakerComponent } from './employee-credentials-maker.component';

describe('EmployeeCredentialsMakerComponent', () => {
  let component: EmployeeCredentialsMakerComponent;
  let fixture: ComponentFixture<EmployeeCredentialsMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCredentialsMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCredentialsMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
