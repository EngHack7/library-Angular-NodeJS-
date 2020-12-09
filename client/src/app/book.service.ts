import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  img: any;

  constructor(private http : HttpClient ) { }

  DeleteBookBy(id, image):Observable<String>{
    let path = 'http://localhost:3000/books/delete'
    let params = new HttpParams({fromObject:{id,image}})
    return this.http.get<String>(path, {params : params});
  }

  Update(title, description,id, tag , img){
    
    const image = new FormData();
    image.append('img',img);
    let param1 = new HttpParams({fromObject : {title, description, id, tag}})

    let path = 'http://localhost:3000/books/update';
    this.http.post(path, image,{
      params : param1
    }
    ).subscribe(
      (res) => {console.log(res)},
      (error) => {console.log(error)}
    )
    
  }

  Add(title, description){
    let path = 'http://localhost:3000/books/add';
    this.http.post(path, {
     description : description,
     title : title,
    
    }
    ).toPromise().then().catch(error => { throw(error)}
    )
  }

  AddWithAutherAndTag(title, description, auther_id, tags, img : File ){
    console.log(title,description,auther_id,tags)
    const file =new FormData()
    file.append('img',img)

    if(!auther_id && !tags){
      this.Add(title,description);
    
    }
    let params = new HttpParams({fromObject:{
      title,
      description,
      auther_id,
      tags
    }})
    let path = 'http://localhost:3000/books/addBookWithTagAndAuther';
    this.http.post(path,file,{
      params : params
    }
    ).toPromise().then().catch(error => { throw(error)}
    )
   
  }

  GetAll():Observable<[]>{
    return this.http.get<[]>('http://localhost:3000/ga');
  }

  Sort():Observable<[]>{
    return this.http.get<[]>('http://localhost:3000/books/sort');
  }

  GetBooks(): Observable<[]>{
    let param = new HttpParams().set('table_Name','Books')
    return this.http.get<[]>('http://localhost:3000/tableSelector',{params:param} );
     
  }
}
