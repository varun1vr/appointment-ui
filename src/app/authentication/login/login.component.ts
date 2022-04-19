import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  isLogin = new EventEmitter<boolean>();
  constructor(private route:Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenstorageService,
    private messageService: MessageService) { }

  loginForm = this.fb.group({
    
    email: ['varun.1204@yahoo.com'],
    password: ['']
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  ngOnInit(): void {
  }
  signup(){
    console.log("hello");
    this.isLogin.emit(false);
   // this.route.navigateByUrl("signup");
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
  
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (data:any) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        if(this.roles.includes('ROLE_ADMIN')) {
          this.route.navigateByUrl("admin-dashboard")
        }else{
          this.route.navigateByUrl("dashboard")
        }
        this.messageService.message("Login Success");
        
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.messageService.message(this.errorMessage);
      }
    );
    
  }
}
