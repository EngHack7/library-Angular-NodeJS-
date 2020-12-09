import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { AutherService } from '../auther.service';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {


  img: File
  authers : [];
  tags :[] 
  selectedAutherId : any
  selectedTags = '' 
  warning : String;
  public localFields: Object = { text: 'tag_Name', value: 'id' };
  public localWaterMark: string = 'Select tags';
  constructor(private _bookService : BookService, private _autherService : AutherService, private _tagService:TagService) { }

  HandleAdd(title, des, tags):void{
    if ( title ==="" && des === "") {
      this.warning = "enter value for title and description at least";
      console.log(1);
      
    }
    if (!this.selectedTags && ! this.selectedAutherId) {
      // this._bookService.Add(title,des);
      console.log(2);

    }
    else if (!this.selectedAutherId)
    {
      console.log(3);
      //
    }else if(this.tags.length < 0)
    {
      console.log(4);
      //
    }else{
      console.log(JSON.stringify(tags));
      
      this.selectedTags = JSON.stringify(tags)
      console.log(this.selectedTags);
      
      this._bookService.AddWithAutherAndTag(title,des,this.selectedAutherId,this.selectedTags,this.img)
    }
  }

  
  selectChangeHandler (event: any) {
    this.selectedAutherId = event.target.value;
    console.log(this.selectedAutherId);
    
  }
  tagChangeHandler(event:any){
    this.selectedTags += (event.target.value).toString()  
    console.log(this.selectedTags);
    
  
    
  }


  onImageChange(event){
    if (event.target.files.length > 0) {
      let file = event.target.files[0]
      this.img = file 
    }
    console.log(this.img);
    
  }
 
  ngOnInit(): void {
    this._tagService.GetTags().subscribe(data => {this.tags = data
      console.log(data)});
    this._autherService.GetAuther().subscribe(data => this.authers = data)
  }

}
