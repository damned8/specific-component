import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss'],
})
export class CurrencyTableComponent implements OnInit {
  table$ = of(this.getTableData());
  constructor() {}

  ngOnInit(): void {}

  getTableData(): any {
    return {
      headers: [
        'name',
        'quantity',
        'price',
        'averageCost',
        'marketValue',
        'gainLoss',
        'persentOfPortfolio',
        'buy/sell',
      ],
      items: [
        {
          name: 'name',
          quantity: 'quantity',
          price: 'price',
          averageCost: 'averageCost',
          marketValue: 'marketValue',
          gainLoss: 'gainLoss',
          persentOfPortfolio: 'persentOfPortfolio',
        },
        {
          name: 'name',
          quantity: 'quantity',
          price: 'price',
          averageCost: 'averageCost',
          marketValue: 'marketValue',
          gainLoss: 'gainLoss',
          persentOfPortfolio: 'persentOfPortfolio',
        },
        {
          name: 'name',
          quantity: 'quantity',
          price: 'price',
          averageCost: 'averageCost',
          marketValue: 'marketValue',
          gainLoss: 'gainLoss',
          persentOfPortfolio: 'persentOfPortfolio',
        },
        {
          name: 'name',
          quantity: 'quantity',
          price: 'price',
          averageCost: 'averageCost',
          marketValue: 'marketValue',
          gainLoss: 'gainLoss',
          persentOfPortfolio: 'persentOfPortfolio',
        },
      ],
    };
  }
}
