import { TermsComponent } from './terms/terms.component';
import { AuthGaurd } from './login/login_component/auth-gaurd.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login_component/login.component';
import { TripComponent } from './trips/trip/trip.component';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { ContentDirective } from './content.directive';

const routes: Routes = [
  {path: 'trips', canActivate: [AuthGaurd], component: TripsListComponent},
  {path: 'trips/trip/:id', canActivate: [AuthGaurd], component: TripComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'terms', component: TermsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: true })],
  exports: [RouterModule],
   declarations: [
    ContentDirective
  ]
})
export class AppRoutingModule { }
