import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './components/currency/currency.component';
import { TempertureComponent } from './components/temperture/temperture.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  {
    path:'weather',
    pathMatch:'full',
    component:WeatherComponent
  },
  {
    path:'currency',
    pathMatch:'full',
    component:CurrencyComponent
  },
  {
    path:'temperature',
    pathMatch:'full',
    component:TempertureComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
