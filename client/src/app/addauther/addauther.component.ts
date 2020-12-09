import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AutherService } from '../auther.service';

@Component({
  selector: 'app-addauther',
  templateUrl: './addauther.component.html',
  styleUrls: ['./addauther.component.css']
})
export class AddautherComponent implements OnInit {

  id : Number;
  constructor(private route : ActivatedRoute,private _auther_service:AutherService) { }
  HandleAdd(name){
    this._auther_service.AddAuther(name);

  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
  }

}
