import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  enroll = new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10),
  Validators.pattern('[a-z0-9]*')]);
  name = new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  father = new FormControl(null, [Validators.required, Validators.min(10)]);
  mother = new FormControl(null, [Validators.required, Validators.min(3)]);
  email = new FormControl(null, [Validators.required, Validators.email]);
  college = new FormControl(null, [Validators.required]);
  department = new FormControl(null, [Validators.required]);
  date = new FormControl(null, [Validators.required]);
  address = new FormControl(null, [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email ' : '';
  }

  getErrorEnroll() {
    if (this.enroll.hasError('required')) {
      return 'You must enter your enrollment Number';
    } else if (this.enroll.hasError('maxlength')) {
      return 'you must enter 10 digit enrollment number';
    } else if (this.enroll.hasError('minlength')) {
      return 'you must enter 10 digit enrollment number';
    } else if (this.enroll.hasError('pattern')) {
      return 'you must enter only lower alphabet and digit';
    }
  }
  getErrorName() {
    if (this.name.hasError('required')) {
      return 'You must enter your name';
    }
    return this.name.hasError('pattern') ? 'you must enter only alphabet' : '';
  }
  getErrorFather() {
    if (this.father.hasError('required')) {
      return 'You must enter a value';
    }
  }

  getErrorMother() {
    if (this.mother.hasError('required')) {
      return 'You must enter a valid Name';
    }
  }
  getErrorCollege() {
    if (this.college.hasError('required')) {
      return 'You must select your college';
    }
  }
  getErrorDepartment() {
    if (this.department.hasError('required')) {
      return 'You must select your Department';
    }
  }

  getErrorDate() {
    if (this.date.hasError('required')) {
      return 'You must select your Addmission date';
    }
  }
  getErrorAddress() {
    if (this.address.hasError('required')) {
      return 'You must enter a valid Address';
    }
    return this.address.hasError('mother') ? 'min Length is 10' : '';
  }

  checkname(event) {
    // console.log(event.key);
    // const x: any = event.key;
    // console.log('x=', x);
    // const ch = String.fromCharCode(event.which);
    const ch = event.key;
    if ((/[0-9]/.test(ch))) {
      console.log('valid');
      event.preventDefault();
    }
  }




  getdata(): any {
    console.log(this.mother.value);
  }
}
