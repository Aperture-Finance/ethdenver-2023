export interface TextInputProps {
  id: string;
  initialValue?: string;
  placeholder: string;
  onChange: (str: string) => void;
  onError: (str: string) => boolean;
}
