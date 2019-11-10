import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder }from '@angular/forms';

@Component({
  selector: 'app-selection-form',
  templateUrl: './selection-form.component.html',
  styleUrls: ['./selection-form.component.css']
})
export class SelectionFormComponent implements OnInit {
  currentStep = 1;
  
  mainForm;
  // mainForm = new FormGroup({
  //   subForm1: new FormGroup({
  //     pizzaSize: new FormControl(''),
  //   }),
  //   subForm2: new FormGroup({
  //     pizzaShape: new FormControl('')
  //   }),
  //   subForm3: new FormGroup({
  //     pizzaCrust: new FormControl('')
  //   })
  // });


  constructor(fb: FormBuilder) { 
    this.mainForm = fb.group({
      subForm1: fb.group({
        pizzaSize: ['']
      }),
      subForm2: fb.group({
        pizzaShape: ['']
      }),      
      subForm3: fb.group({
        pizzaCrust: ['']
      }),
    })
  }

  ngOnInit() {
  }

  onSubmit(value:any){
    let savedFormData = value;
    console.log(value);
  }

  previousfn($event) {
    if (this.currentStep <= 1) {
      return;
    } else {
      this.currentStep --
      return;
    }

  }

  nextfn($event){
    if (this.currentStep >= 3) {
      return;
    } else {
      this.currentStep ++
      return;
    }
  }

}
