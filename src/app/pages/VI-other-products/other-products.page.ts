import { Component } from '@angular/core';

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.page.html',
  styleUrls: ['./other-products.page.css']
})
export class OtherProductsPage {
  images = [
    "1000000655.jpg ",
    "1000000656.jpg ",
    "1000000657.jpg ",
    "353.jpg ",
    "IMG-19329ea130361062962a31c1f049072c-V.jpg ",
    "IMG_20220903_194518.jpg ",
    "IMG_20220903_194526.jpg ",
    "IMG_20220903_194557.jpg ",
    "IMG_20220903_194608.jpg ",
    "IMG-208a1e7ace4f5b65e71c18dce5223467-V.jpg ",
    "IMG-2601b637c43039afd0e7966d7b49a3e1-V.jpg ",
    "IMG-324bef26fdc93bc29ee0036b7a6fb402-V.jpg ",
    "IMG-4e83195cecb296edcbe5bf02e3856be3-V.jpg ",
    "IMG-54ecfe34e2f03c9b961f4869a4c52116-V.jpg ",
    "IMG-6a52f27f99d160fbee300818274e5a65-V.jpg ",
    "IMG-89deed7d32f4515ee43dad0995c09b8d-V.jpg ",
    "IMG-b02c56e8f238b0edb3944386a1c5b4c3-V.jpg ",
    "IMG-cf1ae0db8f9e4f0f13700d7258d1bc33-V.jpg ",
    "IMG-d41956e8f8cef7c925b777bf3d5c1e96-V.jpg ",
    "IMG-d81c00576165b963e0cf0361345f2caf-V.jpg ",
    "IMG-ef8b32c433208cc62b28353db8c6e7aa-V.jpg ",
  ].map(img => `assets/images/VI-other-products/${img}`)
}
