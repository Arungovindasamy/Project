import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  userDetailsForm!: FormGroup
  submitted = false;


  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {


    let ddate = new Date();
    console.log(ddate);

    this.userDetailsForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: [ddate, Validators.required],
      email: ['', Validators.required],
      address: new FormArray([])

    });
  }



  get_formControls(controlName: string) {
    return this.userDetailsForm.controls[controlName];
  }

  get_formGroup(grouplName: string) {
    return this.get_formControls(grouplName) as FormGroup;
  }

  get_formGroupControls(grouplName: string, controlName: string) {
    return this.get_formGroup(grouplName).controls[controlName];
  }

  get_formArray(formArrayName: string) {
    return this.get_formControls(formArrayName) as FormArray;
  }

  saveBooking() {
    this.submitted = true;

    let formData = this.userDetailsForm.value;
    console.log('formData', formData);
  }

  reset() {
    this.submitted = false;
    this.userDetailsForm.reset();  
    this.resetAddress();
  }

  addAddress(): FormGroup {
    return this.formBuilder.group({
      street: [''],
      taluk: [''],
      distric: [''],
      pin: [''],
    });
  }

  pushAddress() {
    let addresControl = this.get_formArray('address');
    addresControl.push(this.addAddress());
  }

  deleteAddress(i: number) {
    let addresControl = this.get_formArray('address');
    console.log(addresControl);
    addresControl.removeAt(i);
  } 

  resetAddress(){
    this.get_formArray('address').clear();
  }
}
