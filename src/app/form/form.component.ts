import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mother = new FormControl(null, [Validators.required, Validators.min(3)]);
  email = new FormControl(null, [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMother() {
    if (this.mother.hasError('required')) {
      return 'You must enter a valid Name';
    }
    return this.mother.hasError('mother') ? 'min Length is 10' : '';
  }
  getdata(): any {
    console.log(this.mother.value);
  }
}
