import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPalindromeComponent } from './check-palindrome.component';

describe('CheckPalindromeComponent', () => {
  let component: CheckPalindromeComponent;
  let fixture: ComponentFixture<CheckPalindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPalindromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
