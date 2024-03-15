import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-item-link',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './item-link.component.html',
  styleUrl: './item-link.component.scss'
})
export class ItemLinkComponent {

  @Input({alias: 'path', required: true}) link = '/';

  @Input({alias: 'icon', required: true}) iconItem = '';

  @Input({alias: 'title', required: true}) itemTitle = 'name item';

}
