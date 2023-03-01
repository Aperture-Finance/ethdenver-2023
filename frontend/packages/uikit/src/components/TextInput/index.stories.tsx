import { TextInput } from ".";

export default {
  title: "Components/TextInput",
  argTypes: {},
};

export const Default: React.FC = () => {
  const onChange = (value: string) => {};
  const onError = (text: string) => text === "Error";
  return (
    <TextInput
      id="text-input"
      placeholder="0"
      onChange={onChange}
      onError={onError}
    />
  );
};
