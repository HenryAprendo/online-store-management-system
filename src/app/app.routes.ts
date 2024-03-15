import { Routes } from '@angular/router';
import { UserFormComponent } from './modules/user/components/user-form/user-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/product/product.routes').then(m => m.productRoutes),
  },
  {
    path: 'users',
    component: UserFormComponent
  }
];
