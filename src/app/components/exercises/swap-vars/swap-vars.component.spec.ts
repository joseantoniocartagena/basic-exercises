import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapVarsComponent } from './swap-vars.component';

describe('SwapVarsComponent', () => {
  let component: SwapVarsComponent;
  let fixture: ComponentFixture<SwapVarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapVarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
