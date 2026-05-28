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
      className={`flex items-center gap-1.5 rounded-full py-1.5 px-3 w-fit shadow-sm ${customClass}`}
    >
      <span className="flex-shrink-0">
        <img src={icon} alt="" className="w-4 h-4" />
      </span>

      <div className="flex flex-col">
        <p className={`text-xs sm:text-sm font-${fontWeight || "medium"} leading-tight`}>
          {text}
        </p>
        {time && (
          <p className={`text-xs font-normal ${timeStyle}`}>
            {time}
          </p>
        )}
      </div>
    </div>
  );
};
