import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  roi:any;
  principle:any;
  month:any;
  rate:any;
  b:any;

  select(myval1:any)
  {

    this.roi=myval1;

  }



  calculate(principle:any,month:any,rate:any)
  {

    this.principle=principle;

    this.month=month;

    this.rate=rate;

    var a=this.principle*this.month*this.rate;

    this.b=a/100;

  }


  ngOnInit(): void {
  }

}
