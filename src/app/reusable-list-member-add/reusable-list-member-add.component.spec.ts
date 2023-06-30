import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableListMemberAddComponent } from './reusable-list-member-add.component';

describe('ReusableListMemberAddComponent', () => {
  let component: ReusableListMemberAddComponent;
  let fixture: ComponentFixture<ReusableListMemberAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableListMemberAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableListMemberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
