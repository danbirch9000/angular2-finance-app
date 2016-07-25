import { Component } from 'angular2/core';
import { FinanceService } from './app/finance.service'

@Component({
  selector: 'app',
  templateUrl: 'src/app/app.html',
  providers: [FinanceService]
})

export class App {
  

  names: string = 'Austin and Heather';
    
    //Materialize.updateTextFields();
    constructor(private _financeService: FinanceService){
        this._financeService = _financeService;
    }
    
    getUserInfo(){
        this.error = "";
        this.countries = [];
        this._financeService.getUserInfo('memberinfo')
         .subscribe(
           
            data => this.countries = data,
            error => this.error = "Region " + this.region + " is invalid."
         );
         
    }
  



}