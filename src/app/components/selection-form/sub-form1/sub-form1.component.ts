import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-form1',
  templateUrl: './sub-form1.component.html',
  styleUrls: ['./sub-form1.component.css']
})
export class SubForm1Component implements OnInit {
  @Input('parentForm')
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
