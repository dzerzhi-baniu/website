import { Component } from '@angular/core';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.page.html',
  styleUrls: ['./fonts.page.css']
})
export class FontsPage {
  images = [
    "IMG-04f836255e5df098fd11aa71b6facae8-V.jpg",
    "IMG-0cbf88fb3490647b5a55ce013ad40b60-V.jpg",
    "IMG-0f840cd22bbc8cd40afcfa0553a8b9db-V.jpg",
    "IMG-1242bd80c218680fafe8518c52936ff9-V.jpg",
    "IMG-1f6188b71b9333c5b448f263dd86a160-V.jpg",
    "IMG-277799bc581e102f00c1101f8c00e4a7-V.jpg",
    "IMG-2929c4bc62e9a699d65ef27a7106eaeb-V.jpg",
    "IMG-2ea37928446c9cf0e4c28d3692935e4d-V.jpg",
    "IMG-366fc875377b71a91bff3aa26efd47b8-V.jpg",
    "IMG-46a7de58550095bfbb905489a6b0ab14-V.jpg",
    "IMG-4d42acf962282ed985b3d4ef6722e728-V.jpg",
    "IMG-5515964c9d0a98264b6beb0f3297428d-V.jpg",
    "IMG-60b4642e9640d2b2d594894d1246afbb-V.jpg",
    "IMG-629451c440969bdfbd8ea48f39d3aea1-V.jpg",
    "IMG-671868f6c24e5f68f2d068ae22d4f2cf-V.jpg",
    "IMG-70d5a98c9503e77caea400c305b9c330-V.jpg",
    "IMG-8e69eec6005453ac7593f66ac3195b87-V.jpg",
    "IMG-8fea30aa847054b0d8a8f3f487343fc9-V.jpg",
    "IMG-9e49793f30119381100743eb2f60d4c7-V.jpg",
    "IMG-a1926bb13fcac9638f13bc65607e2ab6-V.jpg",
    "IMG-a6a922f95cd7773915eae20a7608a68e-V.jpg",
    "IMG-abebdc5ad34a7ca43aad9dfcb577ce0a-V.jpg",
    "IMG-ae9d7b57b15a2f604981666debdee5d1-V.jpg",
    "IMG-be2f891cb4e385850234355d92c03de3-V.jpg",
    "IMG-c68ac1a479012be94637bd8f9ff66e76-V.jpg",
    "IMG-c6cd8bc2e32174fdcab4339d6ffaa263-V.jpg",
    "IMG-c75736ce0447246a590cdc55bba37ff8-V.jpg",
    "IMG-d81cbc6bfb4056a92333f8063a99a75c-V.jpg",
    "IMG-e01e8365b5908ac4ba453b900ba31d82-V.jpg",
    "IMG-e8a9d6ff32a12d93e353717cb6878b77-V.jpg",
    "IMG-f510f517b868bdc8308dbc0027f7bfd3-V.jpg",
    "IMG-fd78448e28abcb10d3674deb21de771b-V.jpg",
  ].map(img => `assets/images/V-fonts/${img}`)
}
