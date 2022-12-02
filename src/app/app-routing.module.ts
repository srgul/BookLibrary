import { AdminComponent } from './layouts/admin/admin.component';
import { UserComponent } from './layouts/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './layouts/user/user-routing.module';
import { AdminRoutingModule } from './layouts/admin/admin-routing.module';
import { LoginGuardGuard } from './guard/login-guard.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserComponent,
    children: UserRoutingModule,
    canActivate: [LoginGuardGuard]
  },
  {
    path: "admin",
    component: AdminComponent,
    children: AdminRoutingModule,
    canActivate: [LoginGuardGuard]
  },
  {
    path: "**",
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
