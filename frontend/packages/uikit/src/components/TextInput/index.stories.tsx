import { TextInput } from ".";

export default {
  title: "Components/TextInput",
  argTypes: {},
};

export const Default: React.FC = () => {
  const onChange = (value: string) => {};
  const onError = (text: string) => text === "Error";
  return (
    <>
      <TextInput
        initialValue={"Error message shown when inputting 'Error'"}
        placeholder={"Error message shown when inputting 'Error'"}
        onChange={onChange}
        onError={onError}
        errMsg={"Error message here"}
      />
    </>
  );
};
