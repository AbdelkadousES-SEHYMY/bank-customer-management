import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
 import {Chart} from 'chart.js/auto';



@Component({
  selector: 'app-dashboard-route',
  templateUrl: './dashboard-route.component.html',
  styleUrls: ['./dashboard-route.component.css']
})
export class DashboardRouteComponent implements OnInit {

  customers:Customer[] =[]
  numberOfCustomers:number=0;
  totalAmount:number=0;

maleCustomer : number =0;  
femaleCustomer : number =0;

balanceSavings: number =0; 
 balanceChecking: number =0;
  /**
   *
   */
  constructor(private customerService:CustomerService) {}
   ngOnInit(): void {
     this.customerService.getCustomers().subscribe(customers=>{
      this.customers = customers;
      this.totalAmount=customers.map(c=>c.amount).reduce((previousValue, currentValue) => previousValue+currentValue, 0)
      this.numberOfCustomers=customers.length;
      console.log("this.maleCustomer",this.maleCustomer)
      
      this.calcul()
   ////// CHART 1
   let data ={
    labels: [
      'Female',
      'Male'],
       datasets: [{ 
        label: 'Male Female',
        data: [this.femaleCustomer, this.maleCustomer], 
               backgroundColor: [
                'rgb(255, 99, 132)', 
                'rgb(54, 162, 235)' ]
               }]}; 
   var myChart = new Chart("myChart",  {type : "pie", data });


   /// CHART 2 
   data = {    
          labels: [        'saving',        'Cheking'   ],
          datasets: [{       
           label: 'Balance',     
           data: [this.balanceSavings, this.balanceChecking],
           backgroundColor: [     
                    
          'rgb(54, 162, 2)',          'rgb(25, 99, 132)'        ]      }]    };    
      var balance = new Chart("balance", {type: "bar", data});
  
    } )      



    }



    
  calcul (){
    
    this.femaleCustomer = this.customers.filter( (s) => {  return (s.gender=="Female"); }).length;
    this.maleCustomer= this.customers.filter( (s )=> {        return (s.gender=="Male"); } ).length;

    for(let c in this.customers){
       if(this.customers[c].accountType =="saving")
               this.balanceSavings+=this.customers[c].amount;
           else {
                if(this.customers[c].accountType =="checking")
                 this.balanceChecking+=this.customers[c].amount;}
    }

    console.log("this.balanceChecking",this.balanceChecking)
  }

    //this.customerService.getCustomers()
  }

 
