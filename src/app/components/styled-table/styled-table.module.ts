import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyledTableComponent } from './styled-table.component';

@NgModule({
  declarations: [StyledTableComponent],
  imports: [CommonModule],
  exports: [StyledTableComponent],
})
export class StyledTableModule {}
