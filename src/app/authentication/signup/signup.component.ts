import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private httpService:HttpService,
    private messages:MessageService,
    private authService: AuthService) { }

  ngOnInit(): void {
  }
  profileForm = this.fb.group({
    username:[''],
    // firstName: ['', Validators.required],
    // lastName: [''],
    phoneNumber: [''],
    email: [''],
    password: ['']
  });
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.log(this.profileForm.value);
    // this.httpService.saveData(JSON.stringify(this.profileForm.value), "user").subscribe((resp)=> {
    //   console.log(resp);
    //   this.messages.message("SignUp succesfull");
    // });

    this.authService.register(this.profileForm.value.username, this.profileForm.value.email, this.profileForm.value.password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.messages.message(this.errorMessage);
      }
    );
  }
}
