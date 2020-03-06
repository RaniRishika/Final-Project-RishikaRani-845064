import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerViewProfileComponent } from './view-profile.component';

describe('ViewProfileComponent', () => {
  let component: BuyerViewProfileComponent;
  let fixture: ComponentFixture<BuyerViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
