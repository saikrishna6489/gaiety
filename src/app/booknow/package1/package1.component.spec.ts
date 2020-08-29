import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package1Component } from './package1.component';

describe('Package1Component', () => {
  let component: Package1Component;
  let fixture: ComponentFixture<Package1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
