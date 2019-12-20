import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceStatementComponent } from './dice-statement.component';

describe('DiceStatementComponent', () => {
  let component: DiceStatementComponent;
  let fixture: ComponentFixture<DiceStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
