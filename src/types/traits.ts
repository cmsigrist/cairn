export enum Physique {
  Athletic = 1,
  Brawny,
  Flabby,
  Lanky,
  Rugged,
  Scrawny,
  Short,
  Statuesque,
  Stout,
  Towering,
}

export enum Skin {
  Birthmarked = 1,
  Oily,
  Scarred,
  Tanned,
  Webbed,
  Marked,
  Rosy,
  Soft,
  Tattooed,
  Weathered,
}

export enum Hair {
  Bald = 1,
  Braided,
  Curly,
  Filthy,
  Frizzy,
  Long,
  Luxurious,
  Oily,
  Wavy,
  Wispy,
}

export enum Face {
  Bony = 1,
  Broken,
  Chiseled,
  Elongated,
  Pale,
  Perfect,
  Rakish,
  Sharp,
  Square,
  Sunken,
}

export enum Speech {
  Blunt = 1,
  Booming,
  Cryptic,
  Droning,
  Formal,
  Gravelly,
  Precise,
  Squeaky,
  Stuttering,
  Whispery,
}

export enum Clothing {
  Antique = 1,
  Bloody,
  Elegant,
  Filthy,
  Foreign,
  Frayed,
  Frumpy,
  Livery,
  Rancid,
  Soiled,
}

export enum Virtue {
  Ambitious = 1,
  Cautious,
  Courageous,
  Disciplined,
  Gregarious,
  Honorable,
  Humble,
  Merciful,
  Serene,
  Tolerant,
}

export enum Vice {
  Aggressive = 1,
  Bitter,
  Craven,
  Deceitful,
  Greedy,
  Lazy,
  Nervous,
  Rude,
  Vain,
  Vengeful,
}

export type Traits = {
  physique: Physique;
  skin: Skin;
  hair: Hair;
  face: Face;
  speech: Speech;
  clothing: Clothing;
  virtue: Virtue;
  vice: Vice;
};