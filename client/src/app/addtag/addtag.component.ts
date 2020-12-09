import { Component, OnInit } from '@angular/core';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-addtag',
  templateUrl: './addtag.component.html',
  styleUrls: ['./addtag.component.css']
})
export class AddtagComponent implements OnInit {

  constructor(private _tag_Service : TagService) { }

  HandleAdd(tag_Name){
    this._tag_Service.AddTag(tag_Name);
  }

  ngOnInit(): void {
  }

}
