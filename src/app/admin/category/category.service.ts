import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public create(data): Observable<Response> {
    return this.http.post<Response>('/api/category/create', data);
  }

  public getAllCategories(): Observable<Response> {
    return this.http.get<Response>('/api/category/getAllCategories');
  }

  public editCategorybyID(data): Observable<Response> {
    return this.http.post<Response>('/api/category/editCategorybyID', data);
  }

  public deleteCategorybyID(data): Observable<Response> {
    return this.http.post<Response>('/api/category/deleteCategorybyID', data);
  }

}
