import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-package1',
  templateUrl: './package1.component.html',
  styleUrls: ['./package1.component.css']
})
export class Package1Component implements OnInit {
  Package1form:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
