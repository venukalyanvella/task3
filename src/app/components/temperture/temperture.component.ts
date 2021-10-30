import { Component, OnInit, ViewChild } from '@angular/core';
import { Weather } from "../../Weather";
@Component({
  selector: 'app-temperture',
  templateUrl: './temperture.component.html',
  styleUrls: ['./temperture.component.css']
})
export class TempertureComponent implements OnInit {


  faren:Number =0;
  celcius:Number=0;

  constructor() { }

  ngOnInit() {
    // console.log("Celcious ",this.getCelcius(60));
    // console.log("FaherenHeit ",this.getFahren(45))

    

  }
  
  getCelcius(celsius:any){
    let result= Math.round(celsius* 9/5 +32);
    this.celcius = result;
    return result

  }

  getFahren(fahren:any){
    let result = (fahren - 32) * 5/9;
    this.faren= result
return result

  }

}
