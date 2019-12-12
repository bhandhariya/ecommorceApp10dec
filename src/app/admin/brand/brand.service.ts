import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }

  public getAllSubSUbCategory(): Observable<Response>  {
    return this.http.get<Response>('/api/brand/getAllbrandWithAlldetails');
  }

  public getAll(): Observable<Response>  {
    return this.http.get<Response>('/api/brand/get');
  }

}
