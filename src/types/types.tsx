export type CatImages = {
    id: string;
    url: string;
    width: string;
    height: string;
}
export type GlobalActionType =
  | { type: 'SET_BREED_ID'; payload: { breedId: string } }
  | { type: 'SET_CAT_IMAGES'; payload: {catImages: CatImages[]}  };