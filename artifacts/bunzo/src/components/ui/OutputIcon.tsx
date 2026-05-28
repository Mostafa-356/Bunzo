export const OutputIcon = ({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
      <div className="bg-[#E7FAFE] rounded-full p-4 md:p-6 lg:p-7 w-fit h-fit">
        <img src={icon} alt="print" className="w-3" />
      </div>
      <p className="uppercase text-xs font-medium">{title}</p>
    </div>
  );
};