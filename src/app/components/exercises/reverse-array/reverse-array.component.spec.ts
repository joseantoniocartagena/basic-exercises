import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseArrayComponent } from './reverse-array.component';

describe('ReverseArrayComponent', () => {
  let component: ReverseArrayComponent;
  let fixture: ComponentFixture<ReverseArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
