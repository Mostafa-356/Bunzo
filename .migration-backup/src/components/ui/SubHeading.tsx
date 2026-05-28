import { SubHeadingProps } from "../../types/ui";

export const SubHeading = ({ text, animation, customClass }: SubHeadingProps) => {
  return (
    <h2
      className={`font-normal text-xs sm:text-sm lg:text-base ${customClass}`}
      data-aos={animation}
    >
      {text}
    </h2>
  );
};