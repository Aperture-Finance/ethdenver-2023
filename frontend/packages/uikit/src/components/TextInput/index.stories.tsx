import { useState } from "react";
import { TextInput } from ".";

export default {
  title: "Components/TextInput",
  argTypes: {},
};

export const Default: React.FC = () => {
  const [showErrMsg, setShowErrMsg] = useState(false);
  return (
    <>
      <TextInput
        initialValue={"Error message shown when inputting 'Error'"}
        placeholder={"Error message shown when inputting 'Error'"}
        showErrMsg={showErrMsg}
        errMsg={"Error message here"}
        onTyping={(event) => setShowErrMsg(event.target.value === "Error")}
      />
    </>
  );
};
