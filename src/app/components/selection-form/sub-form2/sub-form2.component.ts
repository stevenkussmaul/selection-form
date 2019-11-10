import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-form2',
  templateUrl: './sub-form2.component.html',
  styleUrls: ['./sub-form2.component.css']
})
export class SubForm2Component implements OnInit {
  @Input('parentForm')
  public parentForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
