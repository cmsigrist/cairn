import { BackgroundEnum } from "./backgroundEnum";
import { AurifexBackground } from "./backgrounds/Aurifex";
import { BarberSurgeonBackground } from "./backgrounds/BarberSurgeon";
import { BeastHandlerBackground } from "./backgrounds/BeastHandler";
import { BonekeeperBackground } from "./backgrounds/BoneKeeper";
import { Die } from "./die";

export type BackgroundOptions = {
  name: BackgroundEnum;
  description: string;
  playerNames: string[];
  startingGears: string[];
  startingGold: { die: Die; number: number };
  tables: [
    { question: string; answers: string[] },
    { question: string; answers: { name: string; description: string }[] }
  ];
  img: string;
};

export type Background = {
  name: BackgroundEnum;
  description: string;
  playerName: string;
  startingGears: string[];
  startingGold: number;
  tables: [
    { question: string; answer: string },
    { question: string; answer: { name: string; description: string } }
  ];
  img: string;
};

export const AllBackgrounds: { [key: number]: BackgroundOptions } = {};
AllBackgrounds[BackgroundEnum.Aurifex] = AurifexBackground;
AllBackgrounds[BackgroundEnum.Barber_Surgeon] = BarberSurgeonBackground;
AllBackgrounds[BackgroundEnum.Beast_Handler] = BeastHandlerBackground;
AllBackgrounds[BackgroundEnum.Bonekeeper] = BonekeeperBackground;
AllBackgrounds[BackgroundEnum.Cutpurse] = BarberSurgeonBackground;
AllBackgrounds[BackgroundEnum.Fieldwarden] = AurifexBackground;
AllBackgrounds[BackgroundEnum.Fletchwind] = BeastHandlerBackground;
AllBackgrounds[BackgroundEnum.Foundling] = BonekeeperBackground;
AllBackgrounds[BackgroundEnum.Fungal_Forager] = BarberSurgeonBackground;
AllBackgrounds[BackgroundEnum.Greenwise] = AurifexBackground;
AllBackgrounds[BackgroundEnum.Half_Witch] = BarberSurgeonBackground;
AllBackgrounds[BackgroundEnum.Hexenbane] = BeastHandlerBackground;
AllBackgrounds[BackgroundEnum.Jongleur] = BonekeeperBackground;
AllBackgrounds[BackgroundEnum.Kettlewright] = BarberSurgeonBackground;
AllBackgrounds[BackgroundEnum.Marchguard] = BeastHandlerBackground;
AllBackgrounds[BackgroundEnum.Mountebank] = BarberSurgeonBackground;
AllBackgrounds[BackgroundEnum.Outrider] = AurifexBackground;
AllBackgrounds[BackgroundEnum.Prowler] = BonekeeperBackground;
AllBackgrounds[BackgroundEnum.Rill_Runner] = BeastHandlerBackground;
AllBackgrounds[BackgroundEnum.Scrivener] = BonekeeperBackground;
