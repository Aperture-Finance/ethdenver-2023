import { ReactNode } from 'react';
import { TextInputProps } from "../TextInput";

export interface InputGroupProps extends TextInputProps{
  submitButton: ReactNode
}
