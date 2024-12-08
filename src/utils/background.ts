import { BackgroundEnum } from "../types/backgroundEnum";

export const getBackgroundName = (background: number) => BackgroundEnum[background].replace("_", " ")

export const getBackgroundEnumFromIndex = (index: number): BackgroundEnum => {
  return index as BackgroundEnum;
}