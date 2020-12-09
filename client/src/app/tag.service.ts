import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Injectable()
export class TagService {
  
 tagId : Number;
 updated: String

  GetTags(): Observable<[]>{
   let param = new HttpParams().set('table_Name','Tag')
   return this.http.get<[]>('http://localhost:3000/tableSelector',{params : param});
 }

//  GetTagsById( book_id){
//    let params1 = new HttpParams().set('id',book_id.toString())

//   return this.http.get<[]>('http://localhost:3000/getbookbytag',{params : params1})
//  }

  constructor(private http : HttpClient) {

   }

   getId(id:Number){
     this.tagId = id;       
   }

  DeleteTagById(id):Observable<String>{
    let path = 'http://localhost:3000/tags/delete'
    let param = new HttpParams().set('id',id.toString());
    return this.http.get<String>(path, {params : param});
  }

  UpdateTagbyId(id,tag_Name){
let path = 'http://localhost:3000/tags/update';
 this.http.post(path, {
  tag_Name : tag_Name,
  id : id
 }
 ).toPromise().then().catch(error => { throw(error)}
 )
 
  }

  AddTag(tag_Name){
     let path = 'http://localhost:3000/tags/add';
     this.http.post(path , {
       tag_Name : tag_Name
     }).toPromise().then().catch(error => {console.log(error); throw(error)}
     )
  }

}