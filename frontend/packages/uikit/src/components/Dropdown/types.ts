import { ReactNode } from "react";

export interface DropdownProps {
  tokenList: Token[];
  onSelect: (token: Token, index: number) => void;
}

export interface Token {
  name: string;
  ticker: string;
  icon: ReactNode;
  balance: string | number;
}
