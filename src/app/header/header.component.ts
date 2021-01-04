import { LoginService } from './../login/login_component/login.service';
import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
public userInfo: SocialUser;
  constructor(private loginSvc: LoginService) {
    this.userInfo = this.loginSvc.GetUserInfo();
   }

  ngOnInit(): void {
    if(this.userInfo === null){
      this.userInfo = this.loginSvc.GetUserInfo();
    }
  }

}
