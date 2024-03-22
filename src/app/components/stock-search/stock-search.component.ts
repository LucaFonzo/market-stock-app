import { Component,inject } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { StocksService } from '../../services/stocks.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Stock } from '../../models/Stock';
import { FormsModule } from '@angular/forms';
import { StockSearch } from '../../models/StockSearch';
import { StockDetail } from '../../models/StockDetail';
import { HeaderComponent } from "../header/header.component";
@Component({
    selector: 'app-stock-search',
    standalone: true,
    templateUrl: './stock-search.component.html',
    styleUrl: './stock-search.component.css',
    imports: [MatAutocompleteModule, MatCardModule, FormsModule, MatTableModule, MatSelectModule, MatFormFieldModule, HeaderComponent]
})
export class StockSearchComponent {
  private readonly _stockService: StocksService = inject(StocksService);
  filter = "";
  currency = "$";
  columnsToDisplay = ['name', 'price', 'change', '%'];
  stock: StockDetail | undefined;
  stocks: Stock[] = [];
  constructor() {
  }
  ngOnInit(): void {
    this.getMostGainers();
  }


  getMostGainers() {
    this._stockService.getMostGainers().subscribe(result => {
      this.stocks = result;
    });
  }
  getBiggestLosers() {
    this._stockService.getBiggestLosers().subscribe(result => {
      this.stocks = result;
    })
  }
  getMostActives() {
    this._stockService.getMostActives().subscribe(result => {
      this.stocks = result;
    })
  }

  updateList() {
    switch (this.filter) {
      case "gainers":
        this.getMostGainers();
        break;
      case "losers":
        this.getBiggestLosers();
        break;
      case "actives":
        this.getMostActives();
        break;
      default:
        break;
    }
  }
  updateInfo(stock: StockSearch) {
    this._stockService.getDetailsSymbol(stock.symbol).subscribe(result => {
      this.stock = result[0];
      console.log(this.stock);
    })
  }
}
