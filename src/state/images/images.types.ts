interface Exif {
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
  user: {
    id: string;
    name: string;
    profile_image: {
      small: string;
    };
  };
  urls: {
    regular: string;
    small: string;
  };
  exif?: Exif;
}

export enum ImagesActionTypes {
  SetLoading = 'images/SET_LOADING',
  updateImages = 'images/UPDATE_IMAGES',
}

export interface ImagesState {
  ids: string[];
  byId: Record<string, Image>;
  isLoading: boolean;
}
