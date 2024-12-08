import { BackgroundEnum } from "../types/backgroundEnum"

export const ROUTE_HOME = "/"
export const ROUTE_ROLL = "/roll"
export const ROUTE_EXPLORE = "/explore"
export const ROUTE_EXPLORE_BACKGROUND = (background: BackgroundEnum) => {
  return `${ROUTE_EXPLORE}/background/${background}`
}
export const ROUTE_EXPLORE_OMENS = ROUTE_EXPLORE + "/omens"
export const ROUTE_EXPLORE_BONDS = ROUTE_EXPLORE + "/bonds"
export const ROUTE_EXPLORE_TRAITS = ROUTE_EXPLORE + "/traits"