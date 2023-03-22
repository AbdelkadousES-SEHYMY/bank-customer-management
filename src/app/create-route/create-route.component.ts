import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent {
  customerForm: FormGroup;
  isLoading = false;


  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private toastr: ToastrService

  ) {
    this.customerForm = this.formBuilder.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      accountType: ['', Validators.required],
      amount:[0,[Validators.required, Validators.min(0)]]
    });
  }
  submit() {
    this.isLoading = true;
    this.customerService
      .create(this.customerForm.value)
      .subscribe((customer: Customer) => {
        this.isLoading = false;
        this.customerForm.reset();
        this.toastr.success('The customer was created successfully ', 'Create')
        this.router.navigate(['/details', customer.id]);
      });
  }
  getControl(controlName: string) {
    return this.customerForm.get(controlName);
  }
  canSubmit(): boolean {
    return this.customerForm.dirty && this.customerForm.valid;
  }

}
