import { Exif } from 'state/images/images.types';

interface Meta {
  title: string;
  key: keyof Exif;
}

export const TITLE_ID = 'image-modal-title';

export const META: Meta[] = [
  {
    title: 'Camera make',
    key: 'make',
  },
  {
    title: 'Camera model',
    key: 'model',
  },
  {
    title: 'Focal length',
    key: 'focal_length',
  },
  {
    title: 'Aperture',
    key: 'aperture',
  },
  {
    title: 'Shutter speed',
    key: 'exposure_time',
  },
  {
    title: 'ISO',
    key: 'iso',
  },
];
