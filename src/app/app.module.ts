import { HttpClient } from '@angular/common/http';
import { DataService } from './trips/data.service';
import { TripsService } from './trips/trips.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './trips/trip/trip.component';
import { LoginComponent } from './login/login_component/login.component';
import { RouterModule } from '@angular/router';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import './lit-elements/app.footer.litelement';
import './lit-elements/app.terms.litelement';
// import { SocialLoginModule, SocialAuthServiceConfig } from 'lib';
// import { GoogleLoginProvider } from 'lib';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    LoginComponent,
    TripsListComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    SocialLoginModule,
    HttpClientModule
  ],
  exports: [RouterModule, LoginComponent],
  providers: [TripsService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '320747250067-v9qqgukhkj67jjn247s6a3957pfsdkji.apps.googleusercontent.com'
            ),
          }
        ],
      } as SocialAuthServiceConfig,
    },
    HttpClient
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
      })

export class AppModule {


 }
