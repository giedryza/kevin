export interface Exif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface Image {
  id: string;
  description: string | null;
  alt_description: string;
  user: {
    id: string;
    name: string;
    profile_image: {
      small?: string;
    };
  };
  urls: {
    regular: string;
    small: string;
  };
}

export interface ImageDetails extends Image {
  exif: Exif;
}

export enum ImagesActionTypes {
  SetLoading = 'images/SET_LOADING',
  SetDetailsLoading = 'images/SET_DETAILS_LOADING',
  updateImages = 'images/UPDATE_IMAGES',
  setActiveImage = 'images/SET_ACTIVE_IMAGE',
  setImageDetails = 'images/SET_IMAGE_DETAILS',
}

export interface ImagesState {
  ids: string[];
  byId: Record<string, Image>;
  activeImage: string | null;
  details: {
    ids: string[];
    byId: Record<string, ImageDetails>;
  };
  isLoading: boolean;
  isDetailsLoading: boolean;
}
