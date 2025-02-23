import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-size-validation',
  templateUrl: './image-size-validation.component.html',
  styleUrls: ['./image-size-validation.component.css']
})
// export class ImageSizeValidationComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class ImageSizeValidationComponent {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  errorMessage: string = '';
  readonly MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      if (file.size > this.MAX_FILE_SIZE) {
        this.errorMessage = 'File size must be less than 2MB!';
        this.selectedFile = null;
        this.previewUrl = null;
        return;
      }

      this.selectedFile = file;
      this.errorMessage = '';

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
