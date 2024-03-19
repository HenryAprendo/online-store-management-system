import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-content',
  standalone: true,
  imports: [],
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss'
})
export class TableContentComponent {

  @Input() columnsName: string[] = []

}
