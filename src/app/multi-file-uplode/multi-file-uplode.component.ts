import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-file-uplode',
  templateUrl: './multi-file-uplode.component.html',
  styleUrls: ['./multi-file-uplode.component.css']
})
export class MultiFileUplodeComponent implements OnInit {
  name = 'Angular 4';
  urls:any= [];
  onSelectFile(event:any) {
    console.log("event",event);
    console.log("abc",event.target.files);
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                

                reader.onload = (event:any) => {
                  // console.log(event.target.result);
                   this.urls.push(event.target.result); 
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }
  editImage(event:any){
    this.onSelectFile(event)
  }
  deleteImage(index:number){
     this.urls.splice(index,1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
