import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/Stock';
import { StockSearch } from '../models/StockSearch';
import { StockDetail } from '../models/StockDetail';


@Injectable({
  providedIn: 'root'
})
export class StocksService {
  http = inject(HttpClient);
  constructor() { }
  search(name: String): Observable<StockSearch[]> {
    return this.http.get<StockSearch[]>(`
    https://financialmodelingprep.com/api/v3/search-name?query=${name}&limit=10&exchange=NASDAQ&apikey=s0C3H07GjD4NdiRLYmVRF7Y8xqxaPeGt`)
  }
  getMostGainers(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=s0C3H07GjD4NdiRLYmVRF7Y8xqxaPeGt`)
  }
  getBiggestLosers(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=s0C3H07GjD4NdiRLYmVRF7Y8xqxaPeGt`);
  }
  getMostActives(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=s0C3H07GjD4NdiRLYmVRF7Y8xqxaPeGt`);
  }
  getDetailsSymbol(symbol: String): Observable<StockDetail[]> {
    return this.http.get<StockDetail[]>(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=s0C3H07GjD4NdiRLYmVRF7Y8xqxaPeGt`);
  }
}
