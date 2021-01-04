import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login_component/login.component';
import { TripComponent } from './trips/trip/trip.component';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { LitTerms } from './lit-elements/app.terms.litelement';



const routes: Routes = [
  {path: 'trips', component: TripsListComponent},
  {path: 'trip', component: TripComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'terms', component: LitTerms}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
