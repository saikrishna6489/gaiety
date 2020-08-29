import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package3Component } from './package3.component';

describe('Package3Component', () => {
  let component: Package3Component;
  let fixture: ComponentFixture<Package3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
