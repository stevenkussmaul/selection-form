import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule }from '@angular/forms';

@Component({
  selector: 'app-selection-form',
  templateUrl: './selection-form.component.html',
  styleUrls: ['./selection-form.component.css']
})
export class SelectionFormComponent implements OnInit {

  mainForm = new FormGroup({
    subForm1: new FormGroup({
      pizzaSize: new FormControl(''),
    }),
    subForm2: new FormGroup({
      pizzaShape: new FormControl('')
    }),
    subForm3: new FormGroup({
      pizzaCrust: new FormControl('')
    })
  });


  constructor() { }

  ngOnInit() {
  }

}
