import {Injectable} from '@angular/core';
import {ImgCategory, ImgSize} from "./image-provider.constants";
import {ImageContainer} from "../../common/image-container";

@Injectable({
  providedIn: 'root'
})
export class ImageProviderService {
  private readonly imageLib: Record<ImgCategory, string[]> = {
    [ImgCategory.FRAME_TYPE_SAUNAS]: [
      "IMG-03ac0d1369d092807842cefa30113d92-V.jpg",
      "IMG_20220825_145430.jpg",
      "IMG_20220825_145442.jpg",
      "IMG_20220825_145710.jpg",
      "IMG_20220825_145722.jpg",
      "IMG_20220825_145727.jpg",
      "IMG_20220829_074817_592.jpg",
      "IMG_20220910_110610.jpg",
      "IMG_20220910_110628.jpg",
      "IMG_20220910_110635.jpg",
      "IMG_20220910_110655.jpg",
      "IMG_20220910_110702.jpg",
      "IMG_20220910_110709.jpg",
      "IMG_20220910_110719.jpg",
      "IMG_20220910_110729.jpg",
      "IMG-2c5af3de9dd4e8296b50aa873b7e70cf-V.jpg",
      "IMG-2e80727dea2e391d24aaf552c8457155-V.jpg",
      "IMG-338871f2874391b68c135613647b49c5-V.jpg",
      "IMG-35bc73b0b9e94d4a4dc213c2708b50a9-V.jpg",
      "IMG-44c003659f5ea6c5ba21692f7eaaa1de-V.jpg",
      "IMG-5a6e5598d6c52b759051ab4872e99830-V.jpg",
      "IMG-89deed7d32f4515ee43dad0995c09b8d-V.jpg",
      "IMG-9090957bb059b474fd9e65002cca7220-V.jpg",
      "IMG-9f5c5fd754817985aa09196813011bae-V.jpg",
      "IMG-ac76b177cde2ff582217596958c430ee-V.jpg",
      "IMG-b7bf6313c59b40d2254f8398d0070338-V.jpg",
      "IMG-c3672d9a907249007b980e8d2beb7fbe-V.jpg",
      "IMG-cb4dff5fd05cd2564a0f77d6c410b8d8-V.jpg",
      "IMG-ddec1a70f41563ae348e3bce40abd440-V.jpg",
    ],
    [ImgCategory.LUNAR_BASES_SAUNAS]: [
      "1000000685.jpg",
      "1000000687.jpg",
      "1000000688.jpg",
      "1000000751.jpg",
      "1000000753.jpg",
      "1000000757.jpg",
      "1000000759.jpg",
      "1000000768.jpg",
      "1000000910.jpg",
      "1000000913.jpg",
      "231.jpg",
      "617.jpg",
      "618.jpg",
      "IMG-0253a4e3f8ffe70ccb0a91a9cd262efd-V.jpg",
      "IMG-17c6a0e1b9f10c363d0ebd5a3ab9b5ae-V.jpg",
      "IMG-1904863433ca5d2814db6ba3315f0f5d-V.jpg",
      "IMG_20230219_104739.jpg",
      "IMG_20230219_104745.jpg",
      "IMG_20230219_104749.jpg",
      "IMG-2249e00f2cf0ebf043b590528368ee8f-V.jpg",
      "IMG-29296d5350fad9d194a8843a318b1ab5-V.jpg",
      "IMG-2b4a2b518d62a9b30c41dae2aaf82ec0-V.jpg",
      "IMG-2d1fa55afeceb74d567f2a549d321873-V.jpg",
      "IMG-2e72d461ab06eb75cf8b6e779b8e24e3-V.jpg",
      "IMG-2f25d3ff0c50ab691d3213ca8abbfc19-V.jpg",
      "IMG-3098f2350beb241b21deaa7750957cdc-V.jpg",
      "IMG-3142193df78f6c57a7efbfe86c16bf80-V.jpg",
      "IMG-3252d2883b3f166b4f678609aa9fbec0-V.jpg",
      "IMG-42ed5d5d6c13ed56897f66bc8c7288a0-V.jpg",
      "IMG-4b13cf59bd69b066f121e7b770e3a7e3-V.jpg",
      "IMG-4f483b386c7d30ee8a5fdcc5d0f2d380-V.jpg",
      "IMG-5030a758007a13701ff69b5c8df2332b-V.jpg",
      "IMG-66b3aa8fc6a8a3828096cf8bf260eeff-V.jpg",
      "IMG-66cce9c151de66d0f0e5536d6262893d-V.jpg",
      "IMG-6ee22a35c6184b005909f97787a5def9-V.jpg",
      "IMG-71b8348b26c8288130781ca4decf49a2-V.jpg",
      "IMG-722db06b417a37599cdbffaaea347c5d-V.jpg",
      "IMG-769e2fdb88cd891cfe32a081defabcdb-V.jpg",
      "IMG-7a28796d51257a2ddd752634f9679166-V.jpg",
      "IMG-8543d5cf2e040b41e589f07bedef6beb-V.jpg",
      "IMG-96e09f00251fb58c8bfe16b1fe33672f-V.jpg",
      "IMG-9ae7794875daad8d27cb523067a9b0f7-V.jpg",
      "IMG-a7d8cab17d3d52f217f0ad36fecb0f12-V.jpg",
      "IMG-a919a7afd69df17ea49c39d5c8ff10fa-V.jpg",
      "IMG-b330821b0edb4abd9abd36737040e629-V.jpg",
      "IMG-bb45f0028be04b3cec7909ea277cccf7-V.jpg",
      "IMG-c3f059f583ace4cc76791517fed62239-V.jpg",
      "IMG-c9a882fe0e8d297caa43ab1b488f2917-V.jpg",
      "IMG-ca02c36755b73004cfe89cf5e6fffa13-V.jpg",
      "IMG-e14f82ebacf0be3b0bfa5de50266644f-V.jpg",
      "IMG-f0dcc7b596b9bc79443005e3af101ae3-V.jpg",
      "IMG-fa6133a58f34958c01135cb2b406cb35-V.jpg",
      "IMG-fdccc9531ad9fb6a16a4b6ff2bde67b9-V.jpg",
    ],
    [ImgCategory.FONTS]: [
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
    ],
    [ImgCategory.OTHER_PRODUCTS]: [
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
    ],
    [ImgCategory.OUR_INSTALLATIONS]: [
      "IMG_20220914_151611.jpg",
      "IMG_20220916_194151.jpg",
      "IMG_20220916_194238.jpg",
      "IMG_20220916_194253.jpg",
      "IMG_20220916_194319.jpg",
      "IMG_20220919_143203.jpg",
      "IMG_20220919_143225.jpg",
      "IMG_20220919_143250.jpg",
      "IMG_20220919_155528.jpg",
      "IMG_20220919_155544.jpg",
      "IMG_20220919_155604.jpg",
      "IMG_20220919_155618.jpg",
      "IMG_20220919_155637.jpg",
      "IMG_20220919_155651.jpg",
      "IMG_20220919_155714.jpg",
      "IMG_20220926_185449.jpg",
      "IMG_20220926_185500.jpg",
      "IMG_20220926_190232.jpg",
      "IMG_20220926_190256.jpg",
      "IMG_20220926_190315.jpg",
      "IMG_20221011_151657.jpg",
      "IMG_20221016_172745.jpg",
      "IMG_20221016_172826.jpg",
      "IMG_20221016_174805.jpg",
      "IMG_20221016_174857.jpg",
      "IMG_20230219_104630.jpg",
      "IMG_20230219_104642.jpg",
      "IMG_20230219_104656.jpg",
      "IMG_20230219_104739.jpg",
      "IMG_20230219_104745.jpg",
      "IMG_20230219_104749.jpg",
      "IMG_20230219_104823.jpg",
    ],
  };

  constructor() {
  }

  public getImageSources({imgCategory: category, imgSize: size}: ImageContainer) {
    const smallChunk = size === ImgSize.SMALL ? '/small' : '';
    const assetsPath = `assets/images/${category}${smallChunk}`;

    return this.imageLib[category].map(img => `${assetsPath}/${img}`);
  }
}