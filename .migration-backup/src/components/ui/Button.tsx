import { ButtonProps } from "../../types/ui";

export const Button = ({
  text,
  icon,
  textColor,
  customClass,
  type,
  customFunction,
  animation,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 text-xs sm:text-xs lg:text-base font-semibold cursor-pointer transition duration-300 py-2 px-3 sm:py-2.5 sm:px-4 md:py-4 md:px-6 lg:py-4 lg:px-8 rounded-xl lg:rounded-2xl shadow-md ${customClass}`}
      aria-label={text}
      onClick={customFunction}
      type={type}
      data-aos={animation}  
    >
      <span className={`${textColor}`}>{text}</span>
      {icon && <img src={icon} alt={text} />}
    </button>
  );
};