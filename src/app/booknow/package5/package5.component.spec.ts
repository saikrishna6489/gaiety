import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package5Component } from './package5.component';

describe('Package5Component', () => {
  let component: Package5Component;
  let fixture: ComponentFixture<Package5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
