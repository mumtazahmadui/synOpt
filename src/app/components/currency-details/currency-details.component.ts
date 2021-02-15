import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from 'src/app/services/data.service';
import { FormattedSingleCurrency, ApiRequest, KrakenCryptoRates, SingleKrakenRate } from "src/app/model/api-request";
import { Observable, timer } from 'rxjs';
import { concatMap, map, tap, } from 'rxjs/operators';

@Component({
  selector: "app-currency-details",
  templateUrl: "./currency-details.component.html",
  styleUrls: ["./currency-details.component.css"]
})
export class CurrencyDetailsComponent implements OnInit {
  objArr: any[];
  exchArr: KrakenCryptoRates;
  singleArr: FormattedSingleCurrency;
  result: {};
  XETHZEUR: SingleKrakenRate;

  utilize: any;

  constructor(private cs: DataService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const capturedCurrency = params.get("currency");
      this.cs.getCryptoExchRate().subscribe((response: ApiRequest) => {
        this.objArr = Object.entries(response);
        this.singleArr = this.objArr.filter(
          single => single[0] === capturedCurrency
        )[0];
        // console.log(this.singleArr[1].last);
        // console.log(this.singleArr);
      });
    });
    this.cs.getMassiveExchDump().subscribe((response: KrakenCryptoRates) => {
      this.exchArr = response;

      console.log(this.exchArr);
      console.log(this.exchArr.result.XXBTZUSD);
    });

    this.startInterval()

  }

  startInterval() {
    timer(2000, 1000).subscribe(res => {
      // console.log(res);
      this.utilize = {
        now: Date.now(),
        rnNumb: Math.random() * (99 - 1) + 1
      }
    })
  }
}
