import React from "react";
import styled from "styled-components";
import { TextInputProps } from "./types";

const StyledInput = styled.input`
  color: black;
  border-radius: 12px;
  border: 1px solid #e1e1e1;
  height: 20px;
  padding: 16px 88px 16px 32px;
  display: block;
  width: calc(100% - 120px);
  background-color: #f9f9f9;
  :is(:focus, :active) {
    background-color: transparent;
    outline: none;
  }
  *:focus {
    outline: none !important;
  }
  font-family: "Chakra Petch", sans-serif;
  font-style: normal;
  font-size: 22px;
  line-height: 100%;
`;

const Notes = styled.span`
  text-transform: uppercase;
  font-size: 22px;
  position: absolute;
  right: 16px;
  top: 14px;
`;

const TextInput: React.FC<TextInputProps> = ({
  id,
  initialValue = "",
  placeholder,
  onChange,
  onError,
  notes,
}) => {
  const handleChange = (event: any) => {
    onChange(event.target.value);
    onError(event.target.value);
  };
  return (
    <div style={{position:'relative'}}>
      <StyledInput
        id={id}
        defaultValue={initialValue}
        placeholder={placeholder}
        onChange={handleChange}
        type="number"
      />
      <Notes>{notes}</Notes>
    </div>
  );
};

export default TextInput;
