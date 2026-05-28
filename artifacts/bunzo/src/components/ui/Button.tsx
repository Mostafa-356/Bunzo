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
      className={`flex justify-center items-center gap-2.5 text-sm font-semibold cursor-pointer transition-all duration-300 py-3 px-5 sm:py-3.5 sm:px-6 md:py-4 md:px-8 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md ${customClass}`}
      aria-label={text}
      onClick={customFunction}
      type={type}
      data-aos={animation}
    >
      <span className={`${textColor}`}>{text}</span>
      {icon && <img src={icon} alt={text} className="w-4 h-4" />}
    </button>
  );
};
