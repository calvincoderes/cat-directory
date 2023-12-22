import { Dispatch, ReactNode } from "react";
import { GlobalActionType, CatImages } from "./types";

export interface GlobalStateInterface {
  breedId: string | null;
  catImages: CatImages[]
}

export interface GlobalContextPropsInterface {
  state: GlobalStateInterface;
  dispatch: Dispatch<GlobalActionType>;
}

export interface GlobalProviderPropsInterface {
    children: ReactNode;
  }