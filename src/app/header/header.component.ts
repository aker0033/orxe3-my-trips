import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './../login/login_component/login.service';
import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
public loggedIn: boolean = false;
public userInfo: SocialUser = {
  name:"",
  photoUrl:"",
  provider:"",
  email:"",
  id:"",
  firstName:"",
  lastName:"",
  authToken:"",
  idToken:"",
  authorizationCode:"",
  response:""
};
  constructor(private loginSvc: LoginService, private route: ActivatedRoute, private router: Router) {


   }

  ngOnInit(): void {
    this.loginSvc.loginEvent.subscribe(
      (user)=>{
              this.userInfo = user;
              this.loggedIn = (user === null || user === undefined);
              });
  }


  LogoutEvent(){
  this.loginSvc.LogUserOut();
  this.router.navigate(['/login']);
  }


}
