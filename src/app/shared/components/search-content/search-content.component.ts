import { Component } from '@angular/core';

@Component({
  selector: 'app-search-content',
  standalone: true,
  imports: [],
  template: `
    <div class="content">
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    .content {
      height: 15%;
      border-bottom: 1px solid var(--border-slate);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `
})
export class SearchContentComponent {

}
