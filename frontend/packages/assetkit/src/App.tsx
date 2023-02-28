import { useState } from "react";
import styled from "styled-components";
import * as AccessoryIcons from "./images/accessory-icons";
import * as ApertureLogos from "./images/aperture-logos";
import * as ApertureLogosUniV3 from "./images/aperture-logos-univ3";
import * as BlockchainIcons from "./images/blockchain-icons";
import * as DefiAppIcons from "./images/defi-app-icons";
import * as FooterIcons from "./images/footer-icons";
import * as InvestLogos from "./images/invest-logos";
import * as ModalIcons from "./images/modal-icons";
import * as NavIcons from "./images/nav-icons";
import * as PopUpIcons from "./images/pop-up-icons";
import * as SocialIcons from "./images/social-icons";
import * as TokenIcons from "./images/token-icons";
import * as TransactionIcons from "./images/transaction-icons";
import * as WalletIcons from "./images/wallet-icons";

const Nav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: clip;
  height: 100%
  width: 240px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const NavButton = styled.a`
  box-sizing: border-box;
  padding: 10px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;

  &:hover {
    background: rgba(13, 23, 24, 0.55);
    border-radius: 8px;
    color: white;
  }
  &.active {
    background: rgba(105, 131, 142, 0.35);
    border-radius: 8px;
  }
`;
const Main = styled.div`
  overflow: hidden auto;
  height: 100%;
  width: calc(100vw - 280px);
  margin-left: 250px;
`;
const ReadmeContainer = styled.div`
  padding: 0 60px;
`;
const ReadmeTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const ReadmeSubtitle = styled.div`
  font-size: 20px;
  font-weight: 550;
  line-height: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const IconList = styled.div`
  padding: 20px;
  padding-top: 40px;
`;
const IconContainer = styled.div`
  display: inline-flex;
  flex-direction: column;

  &.hidden {
    display: none;
  }
`;
const IconWrapper = styled.div`
  text-align: center;
  width: 160px;
  padding: 10px;
  padding-bottom: 0;
`;
const IconDetails = styled.div`
  text-align: center;
  width: 160px;
  padding: 10px;
  padding-bottom: 30px;
`;
const StyledCheckedIcon = styled(AccessoryIcons.CheckedIcon)`
  position: relative;
  top: 4px;
  path {
    stroke: #ffffff;
  }
  stop {
    stop-color: #7e51fd;
  }
`;
function App() {
  const icons = [
    AccessoryIcons,
    BlockchainIcons,
    DefiAppIcons,
    TokenIcons,
    WalletIcons,
    ApertureLogos,
    ApertureLogosUniV3,
    NavIcons,
    SocialIcons,
    FooterIcons,
    ModalIcons,
    PopUpIcons,
    TransactionIcons,
    InvestLogos,
  ];
  const categories = [
    "Accessory Icons",
    "Blockchain Icons",
    "Defi App Icons",
    "Token Icons",
    "Wallet Icons",
    "Aperture Logos",
    "Aperture Logos UniV3",
    "Nav Icons",
    "Social Icons",
    "Footer Icons",
    "Modal Icons",
    "Pop Up Icons",
    "Transaction Icons",
    "Invest Logos",
  ];
  const [category, setCategory] = useState(-1);

  return (
    <>
      <Nav>
        <Title>@aperture/assetkit</Title>
        <NavButton
          className={category === -1 ? "active" : ""}
          onClick={() => setCategory(-1)}
        >
          All Icons
        </NavButton>
        {categories.map((target, index) => {
          return (
            <NavButton
              className={category === index ? "active" : ""}
              onClick={() => setCategory(index)}
            >
              {target}
            </NavButton>
          );
        })}
      </Nav>
      <Main>
        <ReadmeContainer>
          <ReadmeTitle>Read Me</ReadmeTitle>
          <div>This page contains all icons used in Aperture Web App.</div>
          <div>
            Please help to{" "}
            <a
              href="https://team-aperture.slack.com/archives/C03MNSA3CJC"
              rel="noreferrer"
              target="_blank"
            >
              contact us
            </a>{" "}
            with slack if the icon required is not shown.
          </div>
          <ReadmeSubtitle>How to add an icon in frontend code?</ReadmeSubtitle>
          <div>
            1. Add{" "}
            <b>import &#123; XxxIcon &#125; from '@aperture/assetkit';</b>
          </div>
          <div>
            2. Add <b>&#60;XxxIcon &#47;&#62;</b> in HTML return.
          </div>
          <ReadmeSubtitle>
            How to add customized styles to the icon?
          </ReadmeSubtitle>
          <div>
            1. Add <b>import styled from 'styled-components';</b>
          </div>
          <div>
            2. Create styled icon with{" "}
            <b>const StyledXxxIcon = styled(XxxIcon)`</b>add styled css here
            <b>`;</b>
          </div>
          <div>
            3. Add <b>&#60;XxxIcon id="</b>add-xxx-id-here<b>" &#47;&#62;</b> in
            HTML return
          </div>
          <div>
            e.g. We can get CheckedIcon{" "}
            <StyledCheckedIcon id="styled-check-icon-example" /> with the
            following code:
          </div>
          <div>
            <b>const StyledCheckedIcon = styled(AccessoryIcons.CheckedIcon)`</b>
          </div>
          <div>
            <b>&nbsp;&nbsp;path &#123; stroke: #FFFFFF; &#125;</b>
          </div>
          <div>
            <b>&nbsp;&nbsp;stop &#123; stop-color: #7E51FD; &#125;</b>
          </div>
          <div>
            <b>`;</b>
          </div>
          <div>
            <b>
              &#60;StyledCheckedIcon id="styled-check-icon-example" &#47;&#62;
            </b>
          </div>
        </ReadmeContainer>
        <IconList>
          {Object.values(icons).map((displayIcons, categoryIndex) => {
            return Object.values(displayIcons).map((Icon, iconIndex) => {
              const StyledIcon = styled(Icon)`
                height: 50px;
                width: 50px;
              `;
              return (
                <IconContainer
                  key={iconIndex}
                  className={
                    category === -1 || category === categoryIndex
                      ? ""
                      : "hidden"
                  }
                >
                  <IconWrapper>
                    <StyledIcon />
                  </IconWrapper>
                  <IconDetails>
                    {Object.keys(displayIcons)[iconIndex]}
                  </IconDetails>
                </IconContainer>
              );
            });
          })}
        </IconList>
      </Main>
    </>
  );
}

export default App;
