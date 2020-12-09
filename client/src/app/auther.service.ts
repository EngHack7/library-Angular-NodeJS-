import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherService {

  constructor(private http : HttpClient) { }

  DeleteAuther(id):Observable<String>{
    let path = 'http://localhost:3000/authers/delete'
    let param = new HttpParams().set('id',id.toString());
    return this.http.get<String>(path, {params : param});
  }

  UpdateAuther(auther_Name , id){
    let path = 'http://localhost:3000/authers/update'
    this.http.post(path,{
      auther_Name : auther_Name,
      id : id
    }).toPromise().then().catch(error => {
      if (error){console.log(error)}
      throw(error)
    }
    );
  }
  AddAuther(name){
    let path = 'http://localhost:3000/authers/add'
    this.http.post(path, {
auther_Name : name
    }).toPromise().then().catch(error => {
      if (error){console.log(error)}
      throw(error)
    }
    );
  }

  GetAuther(): Observable<[]>{
    let param = new HttpParams().set('table_Name','Auther')
    return this.http.get<[]>('http://localhost:3000/tableSelector',{params : param});  }
}
