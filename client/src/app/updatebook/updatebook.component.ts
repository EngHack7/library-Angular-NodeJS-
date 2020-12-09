import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  BookService
} from '../book.service';
import {
  TagService
} from '../tag.service';
import {
  AutherService
} from '../auther.service';
import {
  HttpParams,
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  flagTagChange :Boolean = false;
  initialTag ;
  authers: [];
  tags: [];
  selectedAutherId: any
  selectedTags = []
  warning: String;
  public localFields: Object = {
    text: 'tag_Name',
    value: 'id'
  };
  public localWaterMark: string = 'Select tags';
  images
  id: Number;
  title: string;
  description: string;

  constructor(private route: ActivatedRoute, private _bookservice: BookService,
    private router: Router,
    private _tagService: TagService,
    private _autherService: AutherService,
    private http: HttpClient
  ) {}

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log(this.images);

    }
  }

  HandleUpdate(tag) {
    if (tag == null) {
      tag = this.initialTag;
    }
    const formData = new FormData();
    formData.append('imgFile', this.images);
    let param = new HttpParams({
      fromObject: {
        title: this.title,
        description: this.description,
        id: this.id.toString(),
        tag: tag,
        AutherId : this.selectedAutherId
      }
    })


    this.http.post < any > ('http://localhost:3000/books/update', formData, {
      params: param
    }).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.router.navigate(['/books']);
  }

  selectChangeHandler(event: any) {
    this.selectedAutherId = event.target.value;
    console.log(this.selectedAutherId);

  }
  tagChangeHandler(event: any) {
    this.flagTagChange = true;
    this.selectedTags = event.target.value;
    console.log(this.selectedTags);

  }

  HandleTagId(id): void {
    this.selectedTags = [{
      id
    }]
    console.log(this.selectedTags);

  }
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.title = this.route.snapshot.paramMap.get('title').toString();
    this.description = this.route.snapshot.paramMap.get('description').toString();
    this.initialTag = this.route.snapshot.paramMap.get('tag_Name').toString();
    this._tagService.GetTags().subscribe(data => {this.tags = data
     }
      )
    this._autherService.GetAuther().subscribe(data => {
    this.authers = data
    })
    
  }
}
