import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyTableComponent } from './currency-table.component';
import { StyledTableModule } from '../styled-table/styled-table.module';



@NgModule({
  declarations: [CurrencyTableComponent],
  imports: [
    StyledTableModule,
    CommonModule
  ],
  exports: [CurrencyTableComponent]
})
export class CurrencyTableModule { }
