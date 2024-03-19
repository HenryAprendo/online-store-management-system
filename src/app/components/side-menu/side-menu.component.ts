import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ItemLinkComponent } from '../item-link/item-link.component';
import { Link } from '../../models/link.model';
import { CommonModule } from '@angular/common';

const linkList:Link[] = [
  {
    id: 1,
    title: 'Products',
    path: 'products',
    icon: 'move_item'
  },
  {
    id: 2,
    title: 'Categories',
    path: 'categories',
    icon: 'category'
  },
  {
    id: 3,
    title: 'Users',
    path: 'users',
    icon: 'group'
  },
  {
    id: 4,
    title: 'Carts',
    path: 'carts',
    icon: 'shopping_cart'
  },
  {
    id: 5,
    title: 'Dashboard',
    path: 'dashboard',
    icon: 'dashboard'
  }
];

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterLinkActive, ItemLinkComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  links: Link[] = linkList.slice();

}
















