import { Attributes } from "./attributes";
import { Background } from "./backgrounds";
import { Traits } from "./traits";

export class Character {
  background: Background;
  // items: InventoryItems[];
  attributes: Attributes;
  hitProtection: number;
  traits: Traits;
  bond: string;
  age: number;
  omen: string

  constructor(
    background: Background,
    // items: InventoryItems[],
    attributes: Attributes,
    hitProtection: number,
    traits: Traits,
    bond: string,
    age: number,
    omen: string
  ) {
    this.background = background;
    // this.items = items;
    this.attributes = attributes;
    this.hitProtection = hitProtection;
    this.traits = traits;
    this.bond = bond;
    this.age = age;
    this.omen = omen;
  }
}
