import React, { useState } from "react";
import styled from "styled-components";
import { TextInputProps } from "./types";

const StyledInput = styled.input<{ showErrMsg: boolean }>`
  display: block;
  width: 683px;
  height: 25px;
  padding: 37px 50px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 100%;
  text-align: justify;
  color: #ffffff;
  border-radius: 25px;
  border: 2px solid ${({ showErrMsg }) => (showErrMsg ? "#ff0000" : "#000000")};
  background-color: ${({ showErrMsg }) => (showErrMsg ? "#6670f5" : "#4751da")};
  background-clip: padding-box;
  backdrop-filter: blur(40px);

  :is(:hover, :focus, :active) {
    border: 2px solid ${({ showErrMsg }) => (showErrMsg ? "#ff0000" : "black")};
    background: #6670f5;
  }

  ::placeholder {
    color: #ffffff;
    opacity: 0.75;
  }
`;

const ErrorMsg = styled.p`
  margin: 14px 0 0 50px;
  height: 25px;
  width: 633px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 100%;
  text-align: justify;
  color: #ff0000;
`;

const TextInput: React.FC<TextInputProps> = ({
  id = "",
  initialValue = "",
  placeholder = "",
  onChange = (value: string) => console.log(value),
  onError = (value: string) => false,
  errMsg = "",
}) => {
  const [showErrMsg, setShowErrMsg] = useState(false);
  const handleChange = (event: any) => {
    onChange(event.target.value);
    setShowErrMsg(onError(event.target.value));
  };
  return (
    <>
      <div>
        <StyledInput
          id={id}
          type="text"
          defaultValue={initialValue}
          placeholder={placeholder}
          onChange={handleChange}
          showErrMsg={showErrMsg}
        />
        {showErrMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
      </div>
    </>
  );
};

export default TextInput;
