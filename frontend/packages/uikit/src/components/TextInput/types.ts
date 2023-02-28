import { ChangeEventHandler } from "react";

export interface TextInputProps {
  id?: string;
  initialValue?: string;
  placeholder?: string;
  onTyping?: ChangeEventHandler<HTMLInputElement>;
  showErrMsg?: boolean;
  errMsg?: string;
}
