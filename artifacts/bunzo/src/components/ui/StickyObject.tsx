import { StickyObjectProps } from "../../types/ui";

export const StickyObject = ({ image, customClass }: StickyObjectProps) => {
  return (
    <span>
      <img
        src={image}
        alt="Sticky object"
        className={`animate-bounce absolute w-8 sm:w-10 lg:w-12 ${customClass}`}
      />
    </span>
  );
};