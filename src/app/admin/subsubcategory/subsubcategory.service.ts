import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubsubcategoryService {

  constructor(private http:HttpClient) { }

  public creatSubSubCategory(data): Observable<Response>  {
    return this.http.post<Response>('/api/subsubcategory/createsubsubcategory',data);
  }

}
