import { BackgroundEnum } from "./backgroundEnum";
import { AurifexBackground } from "./backgrounds/Aurifex";
import { BarberSurgeonBackground } from "./backgrounds/BarberSurgeon";
import { BeastHandlerBackground } from "./backgrounds/BeastHandler";
import { BonekeeperBackground } from "./backgrounds/BoneKeeper";
import { CutpurseBackground } from "./backgrounds/Cutpurse";
import { FieldwardenBackground } from "./backgrounds/Fieldwarden";
import { FletchwindBackground } from "./backgrounds/Fletchwind";
import { FoundlingBackground } from "./backgrounds/Foundling";
import { FungalForagerBackground } from "./backgrounds/FungalForager";
import { GreenwiseBackground } from "./backgrounds/Greenwise";
import { HalfWitchBackground } from "./backgrounds/HalfWitch";
import { HexenbaneBackground } from "./backgrounds/Hexenbane";
import { JongleurBackground } from "./backgrounds/Jongleur";
import { KettlewrightBackground } from "./backgrounds/Kettlewright";
import { MarchguardBackground } from "./backgrounds/Marchguard";
import { MountebankBackground } from "./backgrounds/Mountebank";
import { OutriderBackground } from "./backgrounds/Outrider";
import { ProwlerBackground } from "./backgrounds/Prowler";
import { RillRunnerBackground } from "./backgrounds/RillRunber";
import { ScrivenerBackground } from "./backgrounds/Scrivener";
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
AllBackgrounds[BackgroundEnum.Cutpurse] = CutpurseBackground;
AllBackgrounds[BackgroundEnum.Fieldwarden] = FieldwardenBackground;
AllBackgrounds[BackgroundEnum.Fletchwind] = FletchwindBackground;
AllBackgrounds[BackgroundEnum.Foundling] = FoundlingBackground;
AllBackgrounds[BackgroundEnum.Fungal_Forager] = FungalForagerBackground;
AllBackgrounds[BackgroundEnum.Greenwise] = GreenwiseBackground;
AllBackgrounds[BackgroundEnum.Half_Witch] = HalfWitchBackground;
AllBackgrounds[BackgroundEnum.Hexenbane] = HexenbaneBackground;
AllBackgrounds[BackgroundEnum.Jongleur] = JongleurBackground;
AllBackgrounds[BackgroundEnum.Kettlewright] = KettlewrightBackground;
AllBackgrounds[BackgroundEnum.Marchguard] = MarchguardBackground;
AllBackgrounds[BackgroundEnum.Mountebank] = MountebankBackground;
AllBackgrounds[BackgroundEnum.Outrider] = OutriderBackground;
AllBackgrounds[BackgroundEnum.Prowler] = ProwlerBackground;
AllBackgrounds[BackgroundEnum.Rill_Runner] = RillRunnerBackground;
AllBackgrounds[BackgroundEnum.Scrivener] = ScrivenerBackground;