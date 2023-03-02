import React, { useState } from "react";
import styled from "styled-components";
import { Name, Number, Ticker } from "../Typography";
import { DropdownProps } from "./types";

const DropdownBtn = styled.div`
  border-radius: 16px;
  font-size: 18px;
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  color: black;
  height: 2.8rem;
  width: calc(100% - 30px);
  padding: 0px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 16px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  padding: 16px 0px;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.2s ease-in-out;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  &:hover ${DropdownContent} {
    visibility: visible;
    opacity: 1;
  }
`;

const CoinCard = styled.div`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) minmax(0px, 72px);
  gap: 8px;
  cursor: pointer;
  opacity: 1;
  &:hover {
    background-color: #f1f1f1;
    transition: background-color 0.2s ease-in-out;
    padding: 4px 20px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TokenInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ArrowDown = () => (
  <div style={{position:'absolute', right:'20px', top:'5px'}}>
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.97168 1L6.20532 6L11.439 1" stroke="black"></path>
  </svg>
  </div>
);

const Dropdown: React.FC<DropdownProps> = ({ tokenList, onSelect }) => {
  const [selected, select] = useState<null | number>(null);
  return (
    <>
      <Wrapper>
        <DropdownBtn>
          {selected !== null ? (
            <ButtonWrapper>
              {tokenList[selected].icon}
              <div style={{ marginLeft: "10px" }}>
                {tokenList[selected].ticker}
              </div>
            </ButtonWrapper>
          ) : (
            `Select a token`
          )}
          <ArrowDown />
        </DropdownBtn>
        <DropdownContent>
          {tokenList.map((token, index) => (
            <CoinCard
              key={index}
              onClick={() => {
                if (index !== selected) {
                  select(index);
                  onSelect(token, index);
                }
              }}
            >
              <IconWrapper>{token.icon}</IconWrapper>
              <TokenInfo>
                <Name>{token.name}</Name>
                <Ticker>{token.ticker}</Ticker>
              </TokenInfo>
              <IconWrapper>
                <Number>
                  {String(token.balance).length > 8
                    ? String(token.balance).slice(0, 8) + "..."
                    : token.balance}
                </Number>
              </IconWrapper>
            </CoinCard>
          ))}
        </DropdownContent>
      </Wrapper>
    </>
  );
};

export default Dropdown;
