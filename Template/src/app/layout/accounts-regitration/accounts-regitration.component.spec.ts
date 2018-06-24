import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsRegitrationComponent } from './accounts-regitration.component';

describe('AccountsRegitrationComponent', () => {
  let component: AccountsRegitrationComponent;
  let fixture: ComponentFixture<AccountsRegitrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsRegitrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsRegitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
