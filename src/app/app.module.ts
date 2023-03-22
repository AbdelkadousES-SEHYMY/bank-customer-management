import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';
import { CreateRouteComponent } from './create-route/create-route.component';
import { CustomersRouteComponent } from './customers-route/customers-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { DetailsRouteComponent } from './details-route/details-route.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { DashboardRouteComponent } from './dashboard-route/dashboard-route.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundRouteComponent,
    CreateRouteComponent,
    CustomersRouteComponent,
    AboutRouteComponent,
    DetailsRouteComponent,
    UpdateRouteComponent,
    DashboardRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
