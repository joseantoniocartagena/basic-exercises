import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatedNumberComponent } from './repeating-number.component';

describe('DuplicatedNumberComponent', () => {
  let component: DuplicatedNumberComponent;
  let fixture: ComponentFixture<DuplicatedNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicatedNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicatedNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
