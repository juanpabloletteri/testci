import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userform!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'mail': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  registrar() {

  }

  onSubmit(value: string) {

  }

}
