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

  public createBrand(data): Observable<Response>  {
    return this.http.post<Response>('/api/brand/create',data);
  }
  
  public editbyid(data): Observable<Response>  {
    return this.http.post<Response>('/api/brand/editByid',data);
  }

  public deletebyid(data): Observable<Response>  {
    return this.http.post<Response>('/api/brand/deleteByid',data);
  }

}
