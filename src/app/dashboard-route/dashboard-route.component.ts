import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-dashboard-route',
  templateUrl: './dashboard-route.component.html',
  styleUrls: ['./dashboard-route.component.css']
})
export class DashboardRouteComponent implements OnInit {

  customers:Customer[] =[]
  numberOfCustomers:number=0;
  totalAmount:number=0;
  /**
   *
   */
  constructor(private customerService:CustomerService) {
  }
   ngOnInit(): void {
     this.customerService.getCustomers().subscribe(customers=>{
      this.totalAmount=customers.map(c=>c.amount).reduce((previousValue, currentValue) => previousValue+currentValue, 0)
      this.numberOfCustomers=customers.length
    } )      

    }
    //this.customerService.getCustomers()
  }

 
