import EditBurgerForm from "./EditBurger";
import useBurger from "../hooks/useBurger";

import { useState } from "react";
import { Heading } from "./ui";
import BurgerCard from "./BurgerCard";
import { BurgerType } from "../types/burger";
import useAOS from "../hooks/useAOS";

export default function BurgerShortList({
  headingText,
}: {
  headingText: string;
}) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedBurger, setSelectedBurger] = useState<BurgerType | null>(null);
  const {
    deleteBurger,
    editBurger,
    burgerData,
    error,
    toggleFavorite,
  } = useBurger();

  useAOS({
    duration: 500,
    easing: "ease-in-out",
  });

  function handleOpenEditForm(burger: BurgerType): void {
    setSelectedBurger(burger);
    setShowEditForm(true);
  }
  function handleCloseEditForm(): void {
    setShowEditForm(false);
    setSelectedBurger(null);
  }


  return (
    <section className="flex justify-center items-center mt-10">
      <div className="w-[95%] sm:w-[90%] flex flex-col gap-5">
        <Heading text={headingText} customClass="text-center" />
        { error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : burgerData.length > 0 ? (
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-0 mt-10">
              {burgerData.slice(-4).map((burger: BurgerType) => (
                <BurgerCard
                  key={burger.id}
                  id={burger.id}
                  image={burger.image}
                  name={burger.name}
                  time={burger.time}
                  category={burger.category}
                  isFavorite={burger.isFavorite}
                  handleToggleFavorite={() => toggleFavorite(burger.id)}
                  handleDeleteItem={() => deleteBurger(burger.id)}
                  handleOpenEditForm={() => handleOpenEditForm(burger)}
                  animation={
                    burger.id && burger.id % 2 === 0 ? "fade-up" : "fade-down"
                  }
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {showEditForm && (
        <EditBurgerForm
          handleForm={handleCloseEditForm}
          editBurger={editBurger}
          initialBurger={selectedBurger}
        />
      )}
    </section>
  );
}
