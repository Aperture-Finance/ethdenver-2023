import { Token } from "@aperture/uikit";

export interface PositionCardProps {
  position: any;
  positionId: string | number;
  tokens: [Token, Token];
  progress: number;
}
