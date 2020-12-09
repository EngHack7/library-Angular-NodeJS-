import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-updatetag',
  templateUrl: './updatetag.component.html',
  styleUrls: ['./updatetag.component.css']
})
export class UpdatetagComponent implements OnInit {

  tag_Name : String ;
  id : Number;
  constructor(private route:ActivatedRoute, private _tagservice : TagService) { }
  HandleUpdate(){
    this._tagservice.UpdateTagbyId(this.id,this.tag_Name);
  }

  ngOnInit(): void {
  this.id = parseInt(this.route.snapshot.paramMap.get('id'))
  this.tag_Name = this.route.snapshot.paramMap.get('tag_Name').toString();
  }

}
