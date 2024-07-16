import { Attributes } from "./attributes";
import { Die } from "./die";

export enum Attribute {
  Strength = "STR",
  Dexterity = "DEX",
  Willpower = "WIL",
}

export enum AttackModifiers {
  Blast,
  Impaired,
  Enhanced,
}

export type Roll = {
  die: Die;
  number: number;
  attributes?: Attributes;
  modifier?: AttackModifiers;
};

export enum InventorySlot {
  Petty = 0,
  Normal,
  Bulky,
}

export type InventoryItems = {
  name: string;
  stat: string;
  slot?: InventorySlot;
  roll?: Roll;
  uses?: number;
  perNight?: boolean;
  range?: number;
  gp: number;
};

// export const Armors: InventoryItems[] = [
//   { name: "Shield", stat: "+1", gp: 10 },
//   { name: "Helmet", stat: "+1", gp: 10 },
//   { name: "Gambeson", stat: "+1", gp: 15 },
//   { name: "Brigandine", stat: "1", slot: InventorySlot.Bulky, gp: 20 },
//   { name: "Chainmail", stat: "2", slot: InventorySlot.Bulky, gp: 40 },
//   { name: "Plate", stat: "3", slot: InventorySlot.Bulky, gp: 60 },
// ];

// export type MarketPlace = {};
