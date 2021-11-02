import { Component } from '@angular/core';
import { CropperPosition, ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

const ASPECT_RATIOS_LABELS = [
  '1/1',
  '4/3',
  '16/9',
]

const ASPECT_RATIOS = [
  1/1,
  4/3,
  16/9,
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-cropper';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  position: CropperPosition;
  aspect = ASPECT_RATIOS[0];

  ASPECT_RATIOS = ASPECT_RATIOS;
  ASPECT_RATIOS_LABELS = ASPECT_RATIOS_LABELS;

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.position = event.cropperPosition;
  }

  imageLoaded(image: LoadedImage) {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  setRatio(ratio: number) {
    this.aspect = ratio;
    console.log(this.aspect);

  }
}
