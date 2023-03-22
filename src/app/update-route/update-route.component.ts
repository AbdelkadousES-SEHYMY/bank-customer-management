import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.css']
})
export class UpdateRouteComponent implements OnInit{
  customerForm: FormGroup;
  id: number |null=null;
  //customer?:Customer;
  isLoading = false;


  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.customerForm = this.formBuilder.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      accountType: ['', Validators.required],
      amount:[0,[Validators.required, Validators.min(0), Validators.max(1000000)]]

    });
  }
  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];

    this.customerService.getById( this.route.snapshot.params['id']).subscribe(customer => {
      this.customerForm = this.formBuilder.group({
      
        firstName: [customer.firstName, Validators.required],
        lastName: [customer.lastName, Validators.required],
        gender: [customer.gender, Validators.required],
        address: [customer.address, Validators.required],
        accountType: [customer.accountType, Validators.required],
        amount:[customer.amount,[Validators.required, Validators.min(0)]]


      });
    }, error => console.log(error));
  }
  submit() {
    this.isLoading = true;
    this.customerService
      .updateCustomer(this.route.snapshot.params['id'],this.customerForm.value)
      .subscribe(customer => {
        this.isLoading = false;
        this.customerForm.reset();
        //this.router.navigate(['/details', customer.id]);
        this.toastr.success('The customer was updated successfully ', 'Update')
        this.router.navigate(['/']);
      });
  }
  getControl(controlName: string) {
    return this.customerForm.get(controlName);
  }
  canSubmit(): boolean {
    return this.customerForm.dirty && this.customerForm.valid;
  }
}
