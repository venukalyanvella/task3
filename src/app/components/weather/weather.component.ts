import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';

import { Weather } from "../../Weather";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city:any='';
  weather:Weather = new Weather();
  cities:any =[
    'kadapa','chennai','kochi','mumbai','pune','tirupati'
  ]

  constructor(private ShareService:SharedserviceService) { }

  ngOnInit() {
    
    this.checkWeather('chennai');
    

  }
  checkWeather(city:any){
    this.ShareService.loadWeather(city).subscribe((data:any)=>{
      console.log(data)
      console.log(data['main'].humidity)
      this.weather.city = data['name']
     this.weather.condition = data['weather'][0]['main'];
     this.weather.temperature = Math.round(data['main']['temp']- 273.5*1.8 +32);
     this.weather.icon = this.ShareService.getweatherIcon(data['weather'][0].icon);
      this.weather.humidity= data['main'].humidity;
      this.weather.pressure = data['main'].pressure;
   })
  }

}
