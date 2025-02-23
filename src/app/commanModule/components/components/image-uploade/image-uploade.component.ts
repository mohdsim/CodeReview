import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-uploade',
  templateUrl: './image-uploade.component.html',
  styleUrls: ['./image-uploade.component.css']
})
// export class ImageUploadeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


export class ImageUploadeComponent implements OnInit {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Show image preview
      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }

  onUpload() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post('https://your-api-endpoint.com/upload', formData)
      .subscribe(response => {
        console.log('Upload successful', response);
        alert('Image uploaded successfully!');
      }, error => {
        console.error('Upload failed', error);
        alert('Image upload failed!');
      });
  }



  
}
