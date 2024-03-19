import { Routes } from "@angular/router";
import { UserLayoutComponent } from "./components/user-layout/user-layout.component";
import { UserFormComponent } from "./components/user-form/user-form.component";

export const userRoutes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: UserFormComponent
      }
    ]
  }
];
