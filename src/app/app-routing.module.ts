import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components-module/dashboard/dashboard.component';
import { OrdersComponent } from './components-module/orders/orders.component';
import { ProductComponent } from './components-module/product/product.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 {
  path:'login',
  component: LoginComponent
 },
 {
  path:'',
  component: LayoutComponent,
  children:[
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'product',
      component: ProductComponent
    },
    {
      path:'orders',
      component: OrdersComponent
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
