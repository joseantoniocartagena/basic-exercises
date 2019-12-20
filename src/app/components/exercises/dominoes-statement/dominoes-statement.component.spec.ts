import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DominoesStatementComponent } from './dominoes-statement.component';

describe('DominoesStatementComponent', () => {
  let component: DominoesStatementComponent;
  let fixture: ComponentFixture<DominoesStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominoesStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DominoesStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
