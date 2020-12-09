import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from '@angular/router'
import { MainpageComponent } from './mainpage/mainpage.component';
import { BooksComponent } from './books/books.component';
import { AutherComponent } from './auther/auther.component';
import { TagsComponent } from './tags/tags.component';
import { UpdatetagComponent } from './updatetag/updatetag.component';
import { AddtagComponent } from './addtag/addtag.component';
import { UpdateautherComponent } from './updateauther/updateauther.component';
import { AddautherComponent } from './addauther/addauther.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AddbookComponent } from './addbook/addbook.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path : "" , component : MainpageComponent},
  {path : "books" , component : BooksComponent},
  {path : "auther" , component : AutherComponent},
  {path : "tags" , component : TagsComponent},
  {path : "updatetag/:id/:tag_Name" , component : UpdatetagComponent},
  {path : "addtag" , component : AddtagComponent},
  {path : "updateauther/:id/:auther_Name" , component : UpdateautherComponent},
  {path : "addauther" , component : AddautherComponent},
  {path : "updatebook/:id/:title/:description/:tag_Name" , component : UpdatebookComponent},
  {path : "addbook" , component : AddbookComponent},
  {path : "search" , component : SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
