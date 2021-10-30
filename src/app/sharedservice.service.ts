import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
private w_api = `https://api.openweathermap.org/data/2.5/weather`

private apiKey = `265d5169d6d84c97b3c2fc22641e41a1`;
private c_api = `https://www.amdoren.com/api/currency.php`;
private api_key=`k8vEC7vqmp`

constructor(private _http:HttpClient) { }


  loadWeather(city){
    return this._http.get(this.w_api+ '?q=' +city+ '&APPID='+this.apiKey)
  }
  getweatherIcon(icon:string){
    return 'http://openweathermap.org/img/w/' + icon + ".png"

  }

  getCurrencyConvert(from:String,to:String,amount:Number){
    return this._http.get(this.c_api+'?api_key'+this.api_key+'&from='+from+'&to='+to+'&amount='+amount);
  }



}
