import { CategoryItemProps } from "../../types/ui";

export const CategoryItem = ({ image, name, animation, bgColor }: CategoryItemProps) => {
  // Map bgColor to Tailwind gradient classes
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
      className={`flex flex-col justify-center items-center w-full gap-4 md:gap-6 lg:gap-8 py-5 px-8 rounded-3xl shadow-md ${getGradientClass(bgColor)}`}
      data-aos={animation}
    >
      <figure>
        <img
          src={image}
          alt={name}
          className="max-w-14 sm:max-w-18 md:max-w-20"
        />
      </figure>
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};