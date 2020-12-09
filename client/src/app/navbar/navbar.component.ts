import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flag =[{index : false},{index : false},{index : false},{index : false}]
  constructor(private roter : Router) { }

  IfActive()  {
    console.log(!this.flag[3].index);
    this.flag[3].index = !this.flag[3].index;
    return !this.flag[3].index;
     
     
}

  active =

    {backgroundColor: '#4CAF50' }
  

    non={backgroundColor: 'red'}
    
  HandlePage(pageName){
    this.roter.navigate([`${pageName}`])
  }
  ngOnInit(): void {
  }

}
