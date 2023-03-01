import { TextInput } from ".";

export default {
  title: "Components/TextInput",
  argTypes: {},
};

export const Default: React.FC = () => {
  const onChange = (value: string) => console.log(value);
  const onError = (text: string) => text === "Error";
  return (
    <div style={{width:'80%'}}>
    <TextInput
      id="text-input"
      placeholder="0"
      onChange={onChange}
      onError={onError}
      notes="weth"
    />
    </div>
  );
};
