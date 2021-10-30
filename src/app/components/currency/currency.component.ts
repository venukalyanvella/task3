import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor(private sharedService:SharedserviceService) { }

  ngOnInit() {

    this.getAmount('USD','INR',500)

  

}

getAmount(from:any,to:any,amount:any){

  this.sharedService.getCurrencyConvert(from,to,amount).subscribe(
    (data:any)=>{
      console.log('Converted currency',data);
    }
  )


}
}