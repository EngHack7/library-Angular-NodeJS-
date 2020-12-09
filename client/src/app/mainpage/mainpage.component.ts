import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {

  title = 'fileUpload';
  images;
  multipleImages = [];
  
  constructor(private http : HttpClient){

  }
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  
  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/books/test', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  // getImage() {
  //   //Make a call to Sprinf Boot to get the Image Bytes.
  //   this.http.get('http://localhost:3000/image/get/' + this.imageName)
  //     .subscribe(
  //       res => {
  //         this.retrieveResonse = res;
  //         this.base64Data = this.retrieveResonse.picByte;
  //         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       }
  //     );
  // }
 
  ngOnInit(): void {
  //   this._tagService.GetTags().subscribe(data => {this.tags = data})
  // } 
  }
} 
