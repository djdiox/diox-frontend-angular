import { Component, OnInit } from '@angular/core';
// import { GalleriaModule } from 'primeng/primeng';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {

  images: any[];
  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: 'assets/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'assets/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: 'assets/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'assets/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: 'assets/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ source: 'assets/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
    this.images.push({ source: 'assets/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
    this.images.push({ source: 'assets/8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
    this.images.push({ source: 'assets/9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
    this.images.push({ source: 'assets/10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
    this.images.push({ source: 'assets/11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
  }

}
