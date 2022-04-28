import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './pages/nav/nav.component';
import { NavRoutingModule } from './nav-routing.module';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UsersComponent } from './pages/users/users.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavComponent,
    UsersComponent,
    UserInfoComponent,
    UserItemComponent,
    UserFormComponent,
  ],
  imports: [CommonModule, NavRoutingModule, ReactiveFormsModule],
})
export class NavModule {}
