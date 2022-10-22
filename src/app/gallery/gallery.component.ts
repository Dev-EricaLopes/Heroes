import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    imagesPath = 'http://localhost:4200/assets/img/';
    images = [
    'robbin.png',
    'incrediblew.png',
    'arrow.png',
    'flash.png',
    'america.png',
    'spider.png',
    'wonderwoman.png',
    'cat.png'
    ];

  constructor() { }

  ngOnInit() {
  }

}
