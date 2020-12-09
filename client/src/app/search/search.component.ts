import { Component, OnInit } from '@angular/core';
import { TagService } from '../tag.service';
import { AutherService } from '../auther.service';
import { async } from '@angular/core/testing';
import { BookService } from '../book.service';
import { SearchService } from '../search.service';
import { data, type } from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tags
  authers
  books
  selectedTag: any = 'undefined' ;
  selectedAuther :any = 'undefined'
  source : String = 'http://localhost:3000/';
  constructor(private _tagService : TagService, 
    private _autherService : AutherService,
    private _bookService : BookService,
    private _searchService : SearchService
    ) { }
    SelectTagHandler(tag){
     this.selectedTag = tag.target.value;
     console.log(this.selectedTag);
     
    }
    SelectAutherHandler(event){
      this.selectedAuther = event.target.value;
      console.log(typeof(this.selectedAuther));
      
    }
    onSubmit(title:String){
      console.log(title.length);
      if (title.length == 0) {
        title = 'undefined'
        if(this.selectedTag === 'undefined' && this.selectedAuther ==='undefined')
        {
          this.ngOnInit();
        }
      }
      
      
      
     this._searchService.Search(title,this.selectedAuther,this.selectedTag)
     .subscribe((data : any ) => {
      if (data[0].error ) {
        alert('enter Element for search')
      }
      this.books= data
      console.log(this.books)}
     )
    }

  ngOnInit() : void {
    this._tagService.GetTags().subscribe((data : any) =>{
   this.tags = data;
    this.tags.unshift({id : undefined, tag_Name : undefined})
    });
    this._autherService.GetAuther().subscribe((data : any) => {
      this.authers = data
      this.authers.unshift({id : undefined , auther_Name : undefined})
    })
    this._bookService.GetAll().subscribe((data : any) => {
      this.books = data[0]; 
    })
  }

}
