import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './pages/nav/nav.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: ':id',
        component: UserInfoComponent,
      },
      {
        path: ':id/edit',
        component: UserFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavRoutingModule {}
