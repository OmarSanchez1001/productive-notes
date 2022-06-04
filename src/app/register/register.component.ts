import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [FormBuilder]
})
export class RegisterComponent implements OnInit {
  navCtrl: any;

  constructor(
    
    public registerBuilder: FormBuilder
  ) { 
  }
  form: FormGroup;
  isSubmitted = false;

  get errorControl() {
    return this.form.controls;
  }
  ngOnInit() {
    this.form = this.registerBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.compose([Validators.required])],
      password_confirmation: ['', Validators.compose([Validators.required])],
      ocupation: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  isMatching(group: FormGroup){

    console.log("password check");

    var firstPassword = group.controls['p_password'].value;
    var secondPassword = group.controls['p_confirm_password'].value;
    if((firstPassword && secondPassword) && (firstPassword != secondPassword)){
      console.log("mismatch");
      return { "pw_mismatch": true };
    } else{
      return null;
    }

  }
  matchPassword(group): any {
    let password = group.controls.p_password;
    let confirm = group.controls.p_confirm_password;
console.log("indise");
    // Don't kick in until user touches both fields
    if (password.pristine || confirm.pristine) {
      console.log("sd");
      return null;
    }

    // Mark group as touched so we can add invalid class easily
    group.markAsTouched();

    if (password.value === confirm.value) {
      return null;
    }
console.log("sdfdsf");
    return {
      isValid: false
    };
  }

}
