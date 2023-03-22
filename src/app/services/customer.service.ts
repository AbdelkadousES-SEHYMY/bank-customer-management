import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { v4 as uuid } from 'uuid';



const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  // public getCustomers():Observable<Array<Customer>>{
  //   return this.http.get<Array<Customer>>(API_URL)
  // }
  // public searchCustomers(keyword : string):Observable<Array<Customer>>{
  //   return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword)
  // }
  // public saveCustomer(customer: Customer):Observable<Customer>{
  //   return this.http.post<Customer>(environment.backendHost+"/customers",customer);
  // }
  // public deleteCustomer(id: number){
  //   return this.http.delete(environment.backendHost+"/customers/"+id);
  // }

  ////////////////////
  getCustomers(): Observable<Customer[]> {
    console.log(uuid())
    return this.http.get<Customer[]>(API_URL);
  }

  // updateCustomer(customer: Customer): Observable<Customer> {
  //   return this.http.put<Customer>(`${API_URL}/${customer.id}`, customer);
  // }
  updateCustomer(id: string, customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${API_URL}/${id}`, customer);
  }

  deleteCustomer(customer: Customer) {
    return this.http.delete(`${API_URL}/${customer.id}`);
  }

  search(name: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}?q=${name}`);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/${id}`);
  }

  create(customer: Customer): Observable<Customer> {
    const id=uuid();
    customer.id=id;
    return this.http.post<Customer>(API_URL, customer);
  }

  getCustomerByName(name: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}?name=${name}`);
  }
}
