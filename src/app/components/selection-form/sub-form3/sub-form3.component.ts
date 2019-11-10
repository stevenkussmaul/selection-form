import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-form3',
  templateUrl: './sub-form3.component.html',
  styleUrls: ['./sub-form3.component.css']
})
export class SubForm3Component implements OnInit {
  @Input('parentForm')
  public parentForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
