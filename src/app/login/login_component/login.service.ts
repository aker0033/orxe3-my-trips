import { EventEmitter, Injectable, Output } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public loggedIn: boolean;
public user: SocialUser;
  @Output()
  loginEvent: EventEmitter<SocialUser> = new EventEmitter();
  logoutEvent: EventEmitter<Boolean> = new EventEmitter();

constructor(private authService: SocialAuthService) {
  localStorage.setItem('user', '');
  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    if (this.user != null) {
    this.UserLoggedIn(this.user);
    }
  });
 }

private UserLoggedIn(user: SocialUser): void {
  this.user = user;
  this.loggedIn = true;
  localStorage.setItem('user', JSON.stringify(this.user));
  this.loginEvent.emit(this.user);
}

GetUserInfo(): SocialUser{
 const _user = localStorage.getItem('user');
 if (_user !== '') {
 return JSON.parse(_user) as SocialUser;
  }else{
    return null;
  }
}

LogUserOut(): void {
  this.authService.signOut().then(
    () => {
  this.user = null;
  this.loggedIn = false;
  localStorage.setItem('user', '');
    }
    );
}

Login(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
    (val) => {
      this.user = val;
      this.UserLoggedIn(this.user);
    }
  );
}

isAuthenticated(): boolean{
  return this.loggedIn;
 }

}




