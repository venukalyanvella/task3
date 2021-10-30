import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './components/weather/weather.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { TempertureComponent } from './components/temperture/temperture.component';
import { FormsModule } from '@angular/forms';
import { SharedserviceService } from './sharedservice.service';

@NgModule({
  declarations: [
    AppComponent,
  
    WeatherComponent,
    CurrencyComponent,
    TempertureComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
