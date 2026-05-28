import { BadgeProps } from "../../types/ui";

export const Badge = ({
  icon,
  text,
  fontWeight,
  customClass,
  time,
  timeStyle,
}: BadgeProps) => {
  return (
    <div
      className={`flex flex-wrap items-center gap-1 sm:gap-1.5 rounded-full sm:py-2 sm:px-3 py-1 px-2.5 w-fit ${customClass}`}
    >
      <span>
        <img src={icon} alt="" />
      </span>

      <div className="flex flex-col">
        <p className={`text-gray-600 text-xs sm:text-sm font-${fontWeight}`}>
          {text}
        </p>

        <p className={`text-xs sm:text-sm font-normal ${timeStyle}`}>
          {time || ""}
        </p>
      </div>
    </div>
  );
};