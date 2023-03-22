import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-details-route',
  templateUrl: './details-route.component.html',
  styleUrls: ['./details-route.component.css']
})
export class DetailsRouteComponent implements OnInit {
  customer?:Customer
  constructor(
    private customerService: CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activeRoute.params
    .pipe(switchMap((params) => this.customerService.getById(params['id'])))
    .subscribe({
      next: (customer) => (this.customer = customer),
      error: () => {
        this.router.navigate(['/not-found']);
      },
    });
  }

}
