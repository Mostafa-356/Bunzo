import EditBurgerForm from "./EditBurger";
import useBurger from "../hooks/useBurger";

import { useState } from "react";
import { BurgerCardSkeleton, Heading } from "./ui";
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
    isLoading,
    error,
    toggleFavorite,
  } = useBurger();

  useAOS({ duration: 500, easing: "ease-in-out" });

  function handleOpenEditForm(burger: BurgerType): void {
    setSelectedBurger(burger);
    setShowEditForm(true);
  }
  function handleCloseEditForm(): void {
    setShowEditForm(false);
    setSelectedBurger(null);
  }

  return (
    <section className="flex justify-center items-center mt-10 mb-10">
      <div className="w-[95%] sm:w-[90%] flex flex-col gap-10">
        <Heading text={headingText} customClass="text-center" />

        {error && (
          <p className="text-center text-red-500 text-sm">{error}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <BurgerCardSkeleton key={i} />
              ))
            : burgerData.slice(-4).map((burger: BurgerType) => (
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
