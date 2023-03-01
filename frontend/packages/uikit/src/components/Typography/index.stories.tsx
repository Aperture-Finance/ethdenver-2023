import {
  GenericBody,
  GenericMenu,
  GenericSubInfo,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  HeadingButton,
} from "./Typography";

export default {
  title: "Components/Typography",
  argTypes: {},
};

export const Default: React.FC = () => (
  <>
    <p>Heading: Chakra Petch</p>
    <Heading1>Heading1</Heading1>
    <br />
    <Heading2>Heading2</Heading2>
    <br />
    <Heading3>Heading3</Heading3>
    <br />
    <Heading4>Heading4</Heading4>
    <br />
    <HeadingButton>Heading Button</HeadingButton>
    <br />
    <br />
    <br />
    <br />
    <p>Generic: Quicksand</p>
    <GenericBody>Generic Body</GenericBody>
    <br />
    <GenericSubInfo>Generic SubInfo</GenericSubInfo>
    <br />
    <GenericMenu>Generic Menu</GenericMenu>
    <br />
  </>
);
