export interface OptionType {
  id: string | number;
  name: string;
}

export interface SelectDropdownProps {
  label: string;
  options: OptionType[];
  selected: OptionType;
  onChange: (value: OptionType) => void;
  labelStyle?: string;
  optionStyle?: string;
  buttonStyle?: string;
  animation?: string;
}

export interface FormInputProps {
  type?: string;
  placeholder: string;
  customClass?: string;
  customFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  id?: string;
  required?: boolean;
  label?: string;
  labelStyle?: string;
  inputStyle?: string;
  isTextArea?: boolean;
  rows?: number;
  cols?: number;
  animation?: string;
}