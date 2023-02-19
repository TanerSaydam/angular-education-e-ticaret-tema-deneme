import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { LayoutsComponent } from './components/admin/layouts/layouts.component';
import { LoginComponent } from './components/admin/login/login.component';
import { LandingComponent } from './components/ui/landing/landing.component';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: LayoutsComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
