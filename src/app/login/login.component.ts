import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public notLogin: boolean = false;
  public loginForm: FormGroup;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('billy@gmail.com', [Validators.required]),
      password: this.formBuilder.control('happy1', Validators.required)
    })
    return this.loginForm;
  }

  public onSubmit() {
    console.log(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    if (this.loginForm.controls.username.value === 'billy@gmail.com' && this.loginForm.controls.password.value === 'happy1') {
      this.router.navigate(['/site']);
    }
  }

}
