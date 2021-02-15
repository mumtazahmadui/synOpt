export interface ApiRequest {
  USD: [SingleCurrency];
  AUD: [SingleCurrency];
  BRL: [SingleCurrency];
  CAD: [SingleCurrency];
  CHF: [SingleCurrency];
  CLP: [SingleCurrency];
  CNY: [SingleCurrency];
  DKK: [SingleCurrency];
  EUR: [SingleCurrency];
  GBP: [SingleCurrency];
  HKD: [SingleCurrency];
  INR: [SingleCurrency];
  ISK: [SingleCurrency];
  JPY: [SingleCurrency];
  KRW: [SingleCurrency];
  NZD: [SingleCurrency];
  PLN: [SingleCurrency];
  RUB: [SingleCurrency];
  SEK: [SingleCurrency];
  SGD: [SingleCurrency];
  THB: [SingleCurrency];
  TRY: [SingleCurrency];
}

export interface FormattedSingleCurrency {
  currency: string;
  object: [SingleCurrency];
}

export interface SingleCurrency {
  "15m": number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
}

export interface KrakenCryptoRates {
  error: [];
  result: {
    XETHZEUR?: [SingleKrakenRate] | any;
    XETHZUSD?: [SingleKrakenRate] | any;
    XXBTZEUR?: [SingleKrakenRate] | any;
    XXBTZUSD?: [SingleKrakenRate] | any;
  };
}

export interface SingleKrakenRate {
  a: any[];
  b: any[];
  c: any[];
  v: any[];
  p: any[];
  t: any[];
  l: any[];
  h: any[];
  o: any[];
}
