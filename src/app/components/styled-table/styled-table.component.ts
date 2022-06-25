import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'table[app-styled-table]',
  templateUrl: './styled-table.component.html',
  styleUrls: ['./styled-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StyledTableComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
