import { Injectable } from '@angular/core';
import { Observable } from 'node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http:HttpClient) { }

  public createSubCategory(data): Observable<Response> {
   return this.http.post<Response>('/api/subcategory/createSubCategory',data);
  }

  // public createSubCategory(data): Observable<Response> {
    
  //   return this.http.post<Response>('/api/subcategory/createSubCategory', data);
  // }

  public getAllSubCategories(): Observable<Response> {
    return this.http.get<Response>('/api/subcategory/getAllSubCategories');
  }

  public editCategorybyID(data): Observable<Response> {
    return this.http.post<Response>('/api/subcategory/editSubCategorybyID', data);
  }

  public deleteSubCategorybyid(data): Observable<Response> {
    return this.http.post<Response>('/api/subcategory/deleteSubCategorybyid', data);
  }

  public getAllCategoryForSubcategorybyid(data): Observable<Response> {
    return this.http.post<Response>('/api/subcategory/getallcatforsubcatbyid', data);
  }


}
