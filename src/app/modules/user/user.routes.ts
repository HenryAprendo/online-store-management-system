import { Routes } from "@angular/router";
import { UserLayoutComponent } from "./components/user-layout/user-layout.component";
import { UsersComponent } from "./pages/users/users.component";

export const userRoutes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: UsersComponent
      }
    ]
  }
];
