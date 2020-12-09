import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient)
   { }

   Search(title : String , AutherName : String , TagName : String):Observable<[]>{
    return  this.http.post<[]>('http://localhost:3000/search/filter',{
        title,
        AutherName,
        TagName
      })
   }
}
