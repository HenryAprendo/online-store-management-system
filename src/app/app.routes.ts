import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
];
