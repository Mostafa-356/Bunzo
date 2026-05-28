import { FormInputProps } from "../../types/form";

export const FormInput = ({
  type,
  placeholder,
  customClass,
  customFunction,
  value,
  name,
  id,
  required,
  label,
  labelStyle,
  inputStyle,
  isTextArea,
  rows,
  cols,
  animation,
}: FormInputProps) => {
  return (
    <div className={`grid grid-cols-1 gap-2 ${customClass}`} data-aos={animation}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          rows={rows}
          cols={cols}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          required={required}
          className={`w-full rounded-md shadow-sm py-2 px-3 lg:py-4 lg:px-5 text-sm border border-gray-300 bg-transparent focus:border-emerald-500 focus:ring-emerald-500 ${inputStyle}`}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-md shadow-sm py-2 px-3 lg:py-4 lg:px-5 text-sm border border-gray-300 bg-transparent focus:border-emerald-500 focus:ring-emerald-500 ${inputStyle}`}
          onChange={customFunction}
          value={value}
          name={name}
          id={id}
          required={required}
        />
      )}
    </div>
  );
};