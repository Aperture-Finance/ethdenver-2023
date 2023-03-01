import React, { useState } from "react";
import styled from "styled-components";
import { TextInputProps } from "./types";

const StyledInput = styled.input`
  color: black;
  border-radius: 12px;
  border: 1px solid #e1e1e1;
  height: 20px;
  padding: 16px 32px;
  display: block;
  width: 100%;
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

const TextInput: React.FC<TextInputProps> = ({
  id,
  initialValue="",
  placeholder,
  onChange,
  onError,
}) => {
  const handleChange = (event: any) => {
    onChange(event.target.value);
    onError(event.target.value);
  };
  return (
    <StyledInput
      id={id}
      type="text"
      defaultValue={initialValue}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default TextInput;
