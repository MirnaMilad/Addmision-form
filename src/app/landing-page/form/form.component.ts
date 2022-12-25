import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import validator from 'validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  addmisionForm: FormGroup;
  required:string="This field is required";
  notValid:string = "Please enter a valid value";

  constructor( private router : Router){}
  ngOnInit():void {
    this.addmisionForm=new FormGroup({
      "name": new FormControl(null, [Validators.required, this.isAlphabet.bind(this)]),
      "position": new FormControl(null, [Validators.required, this.isAlphabet.bind(this)]),
      "availabilityDate": new FormControl(null, [Validators.required]),
      "salary": new FormControl(null, [Validators.required]),
      "dateOfBirth": new FormControl(null, [Validators.required]),
      "address": new FormControl(null),
      "phoneNumber": new FormControl(null, [Validators.required,  this.isPhone.bind(this)]),
      "email": new FormControl(null, [Validators.required, this.isEmail.bind(this)]),
      "maritalStatus": new FormControl(null, [Validators.required]),
      "uploadCv": new FormControl(null, [Validators.required]),
    })
  }


get formControl() {
  return this.addmisionForm.controls;
}
  onSubmit(){
    this.addmisionForm.reset();

    this.router.navigate(['success'])
  }



  //Name , position validation
isAlphabet(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  const value = control.value.trim() as string;
  const isValidAlphabetEn = value.split(' ').every((word) =>
    validator.isAlpha(word, 'en-US'));
  if (value && !isValidAlphabetEn) {
    return { notAlphabet: true };
  }
  return null;
}


//Email validation
isEmail(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  const value = control.value.trim() as string;
  if (value && !validator.isEmail(value)) {
    return { notEmail: true };
  }
  return null;
}



// Check If Input Contains Valid Mobile Number
  isPhone(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const value = control.value.trim() as string;
    if (value && !validator.isMobilePhone(value)) {
      return { notPhone: true };
    }
    return null;
  }
}
