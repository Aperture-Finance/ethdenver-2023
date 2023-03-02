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
const InputGroup: React.FC<InputGroupProps> = ({
  buttonContext,
  onSubmit,
  onChange,
  ...props
}) => {
  const [error, setError] = React.useState(false);
  const handleChange = (value: string) => {
    onChange(value);
    props.onError(value);
    setError(props.onError(value));
  };
  return (
    <Wrapper>
      <TextInput onChange={handleChange} {...props} />
      <StyledButton error={error} onClick={() => !error && onSubmit()}>
        {buttonContext}
      </StyledButton>
    </Wrapper>
  );
};

export default InputGroup;
