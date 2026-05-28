export const OutputIcon = ({
  icon,
  title,
  onClick,
}: {
  icon: string;
  title: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col justify-center items-center gap-2 group cursor-pointer focus:outline-none"
      title={title}
    >
      <div className="bg-emerald-50 group-hover:bg-emerald-100 border border-emerald-100 group-hover:border-emerald-200 rounded-full p-4 w-fit h-fit transition-all duration-200 group-hover:scale-105 group-active:scale-95">
        <img src={icon} alt={title} className="w-4" />
      </div>
      <p className="uppercase text-xs font-semibold text-gray-500 group-hover:text-emerald-600 transition-colors">
        {title}
      </p>
    </button>
  );
};