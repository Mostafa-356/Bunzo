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
          className={`w-full rounded-xl bg-white/90 py-3 px-4 lg:py-3.5 lg:px-5 text-sm text-gray-800 border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-200 shadow-sm resize-none ${inputStyle}`}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-xl bg-white/90 py-3 px-4 lg:py-3.5 lg:px-5 text-sm text-gray-800 border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-200 shadow-sm ${inputStyle}`}
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