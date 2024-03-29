import { Routes } from "@angular/router";
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductLayoutComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent
      }
    ]
  }
];
