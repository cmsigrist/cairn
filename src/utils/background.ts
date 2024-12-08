import { BackgroundEnum } from "../types/backgroundEnum";

export const getBackgroundName = (background: number) => BackgroundEnum[background].replace("_", " ")