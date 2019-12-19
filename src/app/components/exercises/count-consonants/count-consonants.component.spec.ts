import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountConsonantsComponent } from './count-consonants.component';

describe('CountConsonantsComponent', () => {
  let component: CountConsonantsComponent;
  let fixture: ComponentFixture<CountConsonantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountConsonantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountConsonantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
