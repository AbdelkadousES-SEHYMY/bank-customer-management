import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRouteComponent } from './create-route/create-route.component';
import { CustomersRouteComponent } from './customers-route/customers-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { DetailsRouteComponent } from './details-route/details-route.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { DashboardRouteComponent } from './dashboard-route/dashboard-route.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersRouteComponent,
  },
  {
    path: 'customers',
    component: CustomersRouteComponent,
  },
  {
    path: 'about',
    component: AboutRouteComponent,
  },
  {
    path: 'details/:id',
    component: DetailsRouteComponent,
  },
  {
    path: 'update/:id',
    component: UpdateRouteComponent,
  },
  {
    path: 'create',
    component: CreateRouteComponent,
  },
  {
    path: 'dashboard',
    component: DashboardRouteComponent,
  },
  {
    path: 'not-found',
    component: NotFoundRouteComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
