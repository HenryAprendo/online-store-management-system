import { Routes } from "@angular/router";
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductFormComponent } from "./components/product-form/product-form.component";

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
        path: 'details',
        component: ProductFormComponent
      }
    ]
  }
];
