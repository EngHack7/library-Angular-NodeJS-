import { Component, OnInit } from '@angular/core';
import { TagService } from '../tag.service';
import { Router } from '@angular/router';
import { DialogService } from '../confirmation-dialog/dialog.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tag_Name : String ;
  tags : [];
  deleted: String;
  constructor(private confirmationDialogService :DialogService,private _tagService:TagService,private router : Router) { }

  HandleTagId(tag){
    console.log(tag.id);
    this.router.navigate(['/booksbytag',tag.id])
  }

  public openConfirmationDialog(tag) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete ? ... ?')
    .then((confirmed) =>{ console.log('User confirmed:', confirmed);
    if (confirmed === true) {
      this._tagService.DeleteTagById(tag.id).subscribe(deleted => {this.deleted = deleted;console.log(deleted);
      }); this.ngOnInit();
    }
  })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
   
  }

  HandleNewTag(){
    this.router.navigate((['/addtag']))
  }

  HandleUpdate(id, name){
    this.router.navigate(([`/updatetag`, id, name]))
  }

  ngOnInit(): void {
    this._tagService.GetTags().subscribe(data => {this.tags = data
    });
      
  }

}
