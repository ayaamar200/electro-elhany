import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  imports: [RouterLink],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainSliderComponent {
  // mainSliderOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: false,
  //   dots: false,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplayHoverPause: true,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   items: 1,
  //   nav: true,
  // };
}
