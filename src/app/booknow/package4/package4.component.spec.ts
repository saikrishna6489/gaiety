import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package4Component } from './package4.component';

describe('Package4Component', () => {
  let component: Package4Component;
  let fixture: ComponentFixture<Package4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
