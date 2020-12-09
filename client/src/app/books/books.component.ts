import {
  Component,
  OnInit
} from '@angular/core';
import {
  BookService
} from '../book.service';
import {
  Router
} from '@angular/router';
import {
  TagService
} from '../tag.service';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations'
import {
  DialogService
} from '../confirmation-dialog/dialog.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({
          background: 'greenYellow',
          opacity: 0
        }),
        animate(2000)
      ]),
      transition('* => void', [style({
          background: "red",
          opacity: 0
        }),
        animate(2000)
      ])
    ])
  ]
})
export class BooksComponent implements OnInit {

  books=[];
  deleted;
  tags = [];
  source : String = 'http://localhost:3000/';
  constructor(private _BookService: BookService,
    private router: Router, private _tagsService: TagService,
    private confirmationDialogService: DialogService) {}

  HandelAdd() {
    this.router.navigate(['/addbook'])
  }




  HandleUpdate(id, title, description , tag_Name) {
    this.router.navigate(['/updatebook', id, title, description, tag_Name])
  }

  public openConfirmationDialog(book) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete ? ... ?')
      .then((confirmed) => {
        console.log('User confirmed:', confirmed);
        if (confirmed === true) {
          this._BookService.DeleteBookBy(book.id,book.image_URL).subscribe(data => {
            this.deleted = data;
            console.log(data)
          });
          const index = this.books.findIndex(bok => (book == bok))
          this.books.splice(index, 1)
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }

  Sort(){
    this._BookService.Sort().subscribe((data:any) => {
     this.books = data
      console.log(data);
      
    })
  }

  ngOnInit(): void {
    let newBook  = []
    this._BookService.GetAll().subscribe((data:any) => {
       this.books = data[0]
       console.log(this.books);
    })
  }
}
