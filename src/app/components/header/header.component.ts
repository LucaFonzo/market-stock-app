import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { StockSearch } from '../../models/StockSearch';
import { FormsModule } from '@angular/forms';
import { StocksService } from '../../services/stocks.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatAutocompleteModule,FormsModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private readonly _stockService: StocksService = inject(StocksService);
  name = "";
  searchs: StockSearch[] = [];


  search() {
    this._stockService.search(this.name).subscribe(result => {
      this.searchs = result;
    })
  }
}
