import { Badge, Dropdown } from "./ui";
import timer from "../assets/icons/Timer.svg";
import forkKnife from "../assets/icons/ForkKnife.svg";
import heart_fill from "../assets/icons/heart_fill.svg";
import heart_blank from "../assets/icons/heart_blank.svg";
import { Link } from "react-router-dom";
import { BurgerCardType } from "../types/burger";
import React from "react";
import { useGlobalContext } from "../GlobalContext";

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
        className={`relative flex flex-col justify-between gap-4 rounded-2xl p-3 w-full h-full max-w-80 max-h-96 cursor-pointer bg-gradient-bunzo-card ${customClass}`}
        data-aos={animation}
      >
        <div className="flex flex-col gap-4 ">
          <figure className="relative overflow-hidden rounded-2xl max w-full md:h-36 max-h-48 xl:h-48">
            <div
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white z-10"
              onClick={role === "admin" ? handleToggleFavorite : undefined}
            >
              <img src={isFavorite ? heart_fill : heart_blank} alt="fav" />
            </div>
            <Link to={`/burgers/${id}`} className="relative">
              <img
                src={image}
                alt={name}
                className="hover:scale-[1.1] transition-all w-full h-full object-cover"
              />
            </Link>
          </figure>

          <div className="flex flex-col gap-4">
            <Link
              to={`/burgers/${id}`}
              className="text-xl font-semibold hover:text-emerald-600 transition-colors"
            >
              {name}
            </Link>
          </div>
        </div>

        <div className="flex ml-[-8px]">
          <Badge icon={timer} text={`${time} minutes`} />
          <Badge icon={forkKnife} text={category} />
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
