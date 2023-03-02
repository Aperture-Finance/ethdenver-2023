import { Button } from ".";
export default {
  title: "Components/Button",
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <div style={{ width: "500px" }}>
        <Button onClick={() => console.log("feeTier selected: ")}>default button</Button>
        <Button error>Error Button</Button>
        <Button primary>Primary Button</Button>
      </div>
    </>
  );
};
