import { Injectable, getDebugNode } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormattedSingleCurrency, ApiRequest } from "../model/api-request";

@Injectable({
  providedIn: "root"
})
export class DataService {
  objArr = [];
  constructor(private http: HttpClient) { }

  getCryptoExchRate() {
    return this.http.get("https://blockchain.info/ticker");
  }
  getMassiveExchDump() {
    return this.http.get(
      // ! BTC 2 USD: XXBTZUSD
      "https://api.kraken.com/0/public/Ticker?pair=BTCEUR,ETHUSD,ETHEUR,XXBTZUSD"
    );
  }
}

/*

  a = ask array(<price>, <whole lot volume>, <lot volume>),
  b = bid array(<price>, <whole lot volume>, <lot volume>),
  c = last trade closed array(<price>, <lot volume>),
  v = volume array(<today>, <last 24 hours>),
  p = volume weighted average price array(<today>, <last 24 hours>),
  t = number of trades array(<today>, <last 24 hours>),
  l = low array(<today>, <last 24 hours>),
  h = high array(<today>, <last 24 hours>),
  o = today's opening price

*/
