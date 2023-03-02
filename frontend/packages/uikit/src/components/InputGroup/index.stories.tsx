import { InputGroup } from ".";

export default {
  title: "Components/InputGroup",
  argTypes: {},
};

export const Default: React.FC = () => {
  const onChange = (value: string) => console.log(value);
  const onError = (text: string) => text === "Error";
  return (
    <div style={{ width: "100%" }}>
      <InputGroup
        id="text-input"
        placeholder="0"
        onChange={onChange}
        onError={onError}
        notes="weth"
        submitButton={<div>hi</div>}
      />
    </div>
  );
};
