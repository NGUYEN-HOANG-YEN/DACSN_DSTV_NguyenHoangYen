import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @ViewChild('carouselElement', { static: true })
  carouselElement!: ElementRef<any>;
  images = [
<<<<<<< HEAD
    'https://dulichtoday.vn/wp-content/uploads/2019/05/mon-ngon-dac-san-tra-vin-bun-nuoc-leo.jpg',
    'https://vegiagoc.com/Upload/images/nhung-mon-an-ngon-dac-san-tra-vinh-nhat-dinh-phai-thu%20(1).jpg',
    'https://dulichtoday.vn/wp-content/uploads/2019/05/mon-ngon-dac-san-tra-vinh-banh-ray.jpg',
    'https://r2.nucuoimekong.com/wp-content/uploads/dac-san-tra-vinh-co-gi.jpg',
  ];
=======
    '../../assets/img/banh-tet.jpg',
    '../../assets/img/dua-sap.jpg',
    '../../assets/img/banh-u.jpg',
    '../../assets/img/banh-tet-com-dep.jpg',
    '../../assets/img/cu-cai-muoi.jpg',
    ];
>>>>>>> 1397b9f (Initial commit)
  ngOnInit(): void {}
}
