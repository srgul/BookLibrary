import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CartDetailsComponent } from 'src/app/components/cart-details/cart-details.component';

export const UserRoutingModule: Routes = [
  {
    path: "",
    redirectTo: "homepage",
    pathMatch: 'full'
  },
  {
    path: "homepage",
    component: HomeComponent
  },
  {
    path: "cart-detail",
    component: CartDetailsComponent
  }
]