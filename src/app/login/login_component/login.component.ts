import { LoginService } from './login.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialUser, SocialAuthService } from 'angularx-social-login';


@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user: SocialUser;
  loggedIn: boolean;

  @Output()
  loginEvent: EventEmitter<SocialUser> = new EventEmitter();

  constructor(
    private authService: SocialAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private loginSvc: LoginService) { }

  ngOnInit() {
    this.loginSvc.loginEvent.subscribe((user) => {
      this.user = user;
    });
  }

signInWithGoogle(): void {
 this.loginSvc.Login();
}

signOut(): void {
this.loginSvc.LogUserOut();
}

redirectToTrips(): void{
this.router.navigate(['trips']);
}

}
