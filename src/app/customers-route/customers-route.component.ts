import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers-route',
  templateUrl: './customers-route.component.html',
  styleUrls: ['./customers-route.component.css']
})
export class CustomersRouteComponent {
  p: number = 1;
  collection: any[] = [1,2,3,4,1,2,3,4];
details(customer: Customer) {
  this.router.navigate(['/details', customer.id]);

}
  customers: Customer[]=[]
  isDeleteLoading: any[] = [];
  searchQuerySubject = new Subject<string>();

  constructor(private customerService: CustomerService,    
    private router: Router,
    private toastr: ToastrService

    ) {
    this.searchQuerySubject
    .pipe(debounceTime(500), distinctUntilChanged())
    .subscribe((query: string) => {
      this.search(query);
    });
  }
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers =>  this.customers = customers)
}
search(query: string) {
  this.customerService.search(query).subscribe((customers) => {
    this.customers = customers;
  });
}
onQuery(event: any) {
  this.searchQuerySubject.next(event.target.value);
}
delete(customer: Customer) {
  this.setIsLoading(customer, true);
  this.customerService.deleteCustomer(customer).subscribe(() => {
    this.customers = this.customers.filter((c) => c.id !== customer.id);
    this.setIsLoading(customer, false);
    this.toastr.error("The customer: "+customer.lastName+"\t"+customer.lastName+" was deleted successfully ", 'Delete')

  });
}
update(customer:Customer ){
  this.router.navigate(['/update', customer.id]);

}
private setIsLoading(customer: Customer, isLoading: boolean) {
  this.isDeleteLoading = this.isDeleteLoading.map((p) => {
    if (p.id === customer.id) {
      return { ...p, isLoading };
    }
    return p;
  });
}


}


