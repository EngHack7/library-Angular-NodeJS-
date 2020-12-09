import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute, Router
} from '@angular/router';
import {
  AutherService
} from '../auther.service';

@Component({
  selector: 'app-updateauther',
  templateUrl: './updateauther.component.html',
  styleUrls: ['./updateauther.component.css']
})
export class UpdateautherComponent implements OnInit {

  autherName: String;
  id: Number
  constructor(private rout: ActivatedRoute, private _service: AutherService,private router : Router) {}

  HandleUpdate(auther_Name) {
    this._service.UpdateAuther(auther_Name, this.id)
    this.router.navigate(['/auther'])
  }

  ngOnInit(): void {
    this.id = parseInt(this.rout.snapshot.paramMap.get('id'));
    this.autherName = this.rout.snapshot.paramMap.get('auther_Name').toString();

  }

}
