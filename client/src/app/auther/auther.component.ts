import { Component, OnInit } from '@angular/core';
import { AutherService } from '../auther.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-auther',
  templateUrl: './auther.component.html',
  styleUrls: ['./auther.component.css'],
  animations : [
    trigger('fade',[
      transition('void => *' , [
        style({background : 'greenYellow' , opacity :0}),
        animate(2000)
      ]),
      transition('* => void' ,[style(
        {background : "red" , opacity : 0}
      ),
      animate(2000)
    ])
    ])
  ]
})
export class AutherComponent implements OnInit {

  authers:[];
  deleted :String
  constructor(private _autherService : AutherService, private router : Router) { }

  HandleDelete(id){
    console.log(id)
    this._autherService.DeleteAuther(id).subscribe(data => {this.deleted = data ;console.log(data);
     })
    this.ngOnInit();
    
  }
  HandleUpdate(id , auther_Name){
    this.router.navigate(['/updateauther',id,auther_Name])
  }

  HandelAdd(){
    this.router.navigate(['/addauther'])
  }

  ngOnInit(): void {
   this._autherService.GetAuther().subscribe(data => {this.authers=data ; console.log(data);
   })
  }

}
