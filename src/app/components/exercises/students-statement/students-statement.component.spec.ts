import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsStatementComponent } from './students-statement.component';

describe('StudentsStatementComponent', () => {
  let component: StudentsStatementComponent;
  let fixture: ComponentFixture<StudentsStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
