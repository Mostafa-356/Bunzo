import { HeadingProps } from "../../types/ui";

export const Heading = ({ text, animation, customClass }: HeadingProps) => {
  return (
    <h1
      className={`font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${customClass}`} data-aos={animation}
    >
      {text}
    </h1>
  );
};