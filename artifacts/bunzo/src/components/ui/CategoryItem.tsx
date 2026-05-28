import { CategoryItemProps } from "../../types/ui";

export const CategoryItem = ({ image, name, animation, bgColor }: CategoryItemProps) => {
  const getGradientClass = (color: string) => {
    switch (color) {
      case "#F7F8F4": return "bg-gradient-category-rice";
      case "#FAFDF8": return "bg-gradient-category-veggies";
      case "#FBECEB": return "bg-gradient-category-beef";
      case "#FEF7E9": return "bg-gradient-category-cake";
      case "#F4F4F4": return "bg-gradient-category-bread";
      case "#F5F5F5": return "bg-gradient-category-chocolate";
      default: return "bg-gradient-bunzo-card";
    }
  };

  return (
    <div
      className={`group flex flex-col justify-center items-center w-full gap-3 md:gap-5 py-6 px-4 rounded-3xl shadow-md hover:shadow-xl border border-white/80 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer ${getGradientClass(bgColor)}`}
      data-aos={animation}
    >
      <figure className="w-16 h-16 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="max-w-14 sm:max-w-16 md:max-w-18 group-hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <p className="text-sm sm:text-base font-semibold text-gray-800 text-center">{name}</p>
    </div>
  );
};
