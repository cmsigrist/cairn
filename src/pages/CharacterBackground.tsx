import { FC } from "react";
import { useParams } from "react-router-dom";
import { BackgroundEnum } from "../types/backgroundEnum";

const CharacterBackground: FC = () => {
  const { background } = useParams();
  const e = background !== undefined ? BackgroundEnum[Number.parseInt(background)] : background
  return <>Character background {e}</>;
};

export default CharacterBackground;
