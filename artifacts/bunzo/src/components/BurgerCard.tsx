import { Badge, Dropdown } from "./ui";
import timer from "../assets/icons/Timer.svg";
import forkKnife from "../assets/icons/ForkKnife.svg";
import heart_fill from "../assets/icons/heart_fill.svg";
import heart_blank from "../assets/icons/heart_blank.svg";
import { Link } from "react-router-dom";
import { BurgerCardType } from "../types/burger";
import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { slugify } from "../utils/slug";

const Burger = React.memo(
  ({
    id,
    image,
    name,
    time,
    category,
    isFavorite,
    customClass,
    handleDeleteItem,
    handleOpenEditForm,
    handleToggleFavorite,
    animation,
  }: BurgerCardType) => {
    const { role } = useGlobalContext();

    return (
      <div
        className={`relative flex flex-col justify-between gap-4 rounded-3xl p-3 w-full h-full max-w-80 max-h-96 cursor-pointer bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-100 transition-all duration-300 ${customClass}`}
        data-aos={animation}
      >
        <div className="flex flex-col gap-4">
          <figure className="relative overflow-hidden rounded-2xl w-full md:h-36 max-h-48 xl:h-48 bg-gray-50">
            <div
              className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md z-10 cursor-pointer hover:scale-110 transition-transform"
              onClick={role === "admin" ? handleToggleFavorite : undefined}
            >
              <img src={isFavorite ? heart_fill : heart_blank} alt="fav" className="w-4 h-4" />
            </div>
            <Link to={`/burgers/${slugify(name)}`} className="relative block">
              <img
                src={image}
                alt={name}
                className="hover:scale-[1.08] transition-transform duration-500 w-full h-full object-cover"
              />
            </Link>
          </figure>

          <div className="flex flex-col gap-2 px-1">
            <Link
              to={`/burgers/${slugify(name)}`}
              className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors leading-snug"
            >
              {name}
            </Link>
          </div>
        </div>

        <div className="flex gap-1 px-1">
          <Badge icon={timer} text={`${time} min`} customClass="bg-emerald-50 text-emerald-700" />
          <Badge icon={forkKnife} text={category} customClass="bg-gray-50 text-gray-600" />
        </div>

        {role === "admin" && (
          <div className="absolute bottom-4 right-2">
            <Dropdown
              handleDeleteItem={handleDeleteItem || (() => {})}
              handleOpenEditForm={handleOpenEditForm || (() => {})}
            />
          </div>
        )}
      </div>
    );
  }
);

export default Burger;
