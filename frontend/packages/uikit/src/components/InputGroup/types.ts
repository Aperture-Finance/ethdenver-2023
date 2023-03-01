import { ReactNode } from 'react';
import { TextInputProps } from "../TextInput";

export interface InputGroupProps extends TextInputProps{
  buttonContext: ReactNode,
  onSubmit: () => void,
}
