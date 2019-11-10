import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule }from '@angular/forms';

@Component({
  selector: 'app-selection-form',
  templateUrl: './selection-form.component.html',
  styleUrls: ['./selection-form.component.css']
})
export class SelectionFormComponent implements OnInit {

  pizzaForm = new FormGroup({
    pizzaSize: new FormControl(),
    pizzaShape: new FormControl()
  });


  constructor() { }

  ngOnInit() {
  }

}
