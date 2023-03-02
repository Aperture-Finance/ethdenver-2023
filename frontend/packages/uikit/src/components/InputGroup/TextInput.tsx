import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { InputGroupProps } from "./types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  margin-left: 8px;
  width: 100px;
`;

export const SubmitBtn = (props: any) => (
  <StyledButton primary {...props}>
    {props.children}
  </StyledButton>
);

const InputGroup: React.FC<InputGroupProps> = ({
  submitButton,
  onChange,
  ...props
}) => {
  const handleChange = (value: string) => {
    onChange(value);
    props.onError(value);
  };
  return (
    <Wrapper>
      <TextInput onChange={handleChange} {...props} />
      {submitButton}
    </Wrapper>
  );
};

export default InputGroup;
