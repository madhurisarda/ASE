import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherComponent} from "./weather/weather.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
