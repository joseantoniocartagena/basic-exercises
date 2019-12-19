import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingNumberOnArrayComponent } from './missing-number-on-array.component';

describe('MissingNumberOnArrayComponent', () => {
  let component: MissingNumberOnArrayComponent;
  let fixture: ComponentFixture<MissingNumberOnArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingNumberOnArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingNumberOnArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
