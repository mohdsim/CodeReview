import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-size-with-crope-and-camera',
  templateUrl: './image-size-with-crope-and-camera.component.html',
  styleUrls: ['./image-size-with-crope-and-camera.component.css']
})

export class ImageSizeWithCropeAndCameraComponent {
    imageChangedEvent: any = '';
    croppedImage: any = '';
    selectedFile: File | null = null;
    
    @ViewChild('cameraInput') cameraInput!: ElementRef; // For camera capture
  
    constructor(private http: HttpClient) {}
  
    // Open camera
    openCamera() {
      this.cameraInput.nativeElement.click(); // Simulates a click on the hidden camera input
    }
  
    // Handle file selection (camera or gallery)
    onFileSelected(event: any) {
      this.imageChangedEvent = event; // Pass event to cropper
    }
  
    // Crop image
    // imageCropped(event: ImageCroppedEvent) {
      imageCropped(event:any) {
      this.croppedImage = event.base64; // Get cropped image
    }
  
    imageLoaded() {
      console.log('Image loaded into cropper');
    }
  
    cropperReady() {
      console.log('Cropper is ready');
    }
  
    loadImageFailed() {
      console.error('Failed to load image');
    }
  
    // Upload the cropped image
    onUpload() {
      if (!this.croppedImage) return;
  
      // Convert base64 to File
      const blob = this.dataURItoBlob(this.croppedImage);
      const formData = new FormData();
      formData.append('image', blob, 'cropped-image.png');
  
      this.http.post('https://your-api-endpoint.com/upload', formData)
        .subscribe(response => {
          console.log('Upload successful', response);
          alert('Image uploaded successfully!');
        }, error => {
          console.error('Upload failed', error);
          alert('Image upload failed!');
        });
    }
  
    // Convert base64 to a Blob
    private dataURItoBlob(dataURI: string) {
      const byteString = atob(dataURI.split(',')[1]);
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    }
  }
