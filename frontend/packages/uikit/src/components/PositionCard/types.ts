import { Token } from "../Dropdown";

export interface PositionCardProps {
  positionId: string | number;
  tokens: [Token, Token];
  progress: number;
}
