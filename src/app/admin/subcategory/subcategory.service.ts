import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http:HttpClient) { }

  public create(data): Observable<Response> {
    return this.http.post<Response>('/api/subcategory/createsubsubCategories', data);
  }

  public getAllSubCategories(): Observable<Response> {
    return this.http.get<Response>('/api/subcategory/getAlsubsubCategories');
  }

  public deleteByid(data): Observable<Response> {
    return this.http.post<Response>('/api/subcategory/deletesubsubcategorybyid', data);
  }

}
