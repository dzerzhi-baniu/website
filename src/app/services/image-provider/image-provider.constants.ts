import * as imagesJson from '../../../assets/generated/images.json'

export const enum ImgCategory {
  BARREL_SAUNAS = 'II-barrel-saunas',
  FRAME_TYPE_SAUNAS = 'III-frame-type-saunas',
  LUNAR_BASES_SAUNAS = 'IV-lunar-bases-saunas',
  FONTS = 'V-fonts',
  OTHER_PRODUCTS = 'VI-other-products',
  OUR_INSTALLATIONS = 'VII-our-installations',
}

export const enum ImgSize {
  REGULAR,
  SMALL
}

export type ImageLibrary = Record<ImgCategory, string[]>

export const imageLib = imagesJson as unknown as ImageLibrary;
