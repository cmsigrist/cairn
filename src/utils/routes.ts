import { BackgroundEnum } from "../types/backgroundEnum"

export const ROUTE_HOME = "/"
export const ROUTE_GENERATE = "/generate"
export const ROUTE_CHARACTERS = "/characters"

export const ROUTE_CHARACTERS_BACKGROUND = (background: BackgroundEnum) => {
  return `/characters/${background}`
}