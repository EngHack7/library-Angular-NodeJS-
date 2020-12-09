import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AutherComponent } from './auther/auther.component';
import { BooksComponent } from './books/books.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UpdateautherComponent } from './updateauther/updateauther.component';
import { UpdatetagComponent } from './updatetag/updatetag.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { DeleteautherComponent } from './deleteauther/deleteauther.component';
import { DeletetagComponent } from './deletetag/deletetag.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TagsComponent } from './tags/tags.component'
import { TagService } from './tag.service';
import { AddtagComponent } from './addtag/addtag.component';
import { AddautherComponent } from './addauther/addauther.component';
import { AddbookComponent } from './addbook/addbook.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DialogService } from './confirmation-dialog/dialog.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AutherComponent,
    BooksComponent,
    UpdatebookComponent,
    UpdateautherComponent,
    UpdatetagComponent,
    DeletebookComponent,
    DeleteautherComponent,
    DeletetagComponent,
    TagsComponent,
    AddtagComponent,
    AddautherComponent,
    AddbookComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    SearchComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MultiSelectAllModule,
    
  ],
  providers: [TagService,DialogService],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ],
  
})
export class AppModule { }
