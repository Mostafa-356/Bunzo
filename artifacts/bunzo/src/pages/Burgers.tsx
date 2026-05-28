import { useState, useEffect } from "react";
import { Button, Heading, LoadingSpinner, SubHeading } from "../components/ui";
import BurgerCard from "../components/BurgerCard";
import Pagination from "../components/ui/Pagination";
import { BurgerType } from "../types/burger";
import SelectDropdown from "../components/ui/SelectDropdown";
import { OptionType } from "../types/form";
import useBurger from "../hooks/useBurger";
import EditBurgerForm from "../components/EditBurger";
import AddBurgerForm from "../components/AddBurger";
import { useGlobalContext } from "../GlobalContext";
import useAOS from "../hooks/useAOS";
import { 
  CATEGORY_OPTIONS as categoryOptions, 
  TIME_OPTIONS as timeOptions 
} from "../utils/constants";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function Burgers() {
  const { role } = useGlobalContext();
  useAOS({
    duration: 500,
    easing: "ease-in-out",
  });

  const {
    burgerData,
    isLoading,
    error,
    toggleFavorite,
    editBurger,
    deleteBurger,
    addBurger,
  } = useBurger();

  const [filteredBurgers, setFilteredBurgers] = useState<BurgerType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTime, setSelectedTime] = useState<string>("all");
  const [selectedSearch, setSelectedSearch] = useState<string>("");
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [selectedBurger, setSelectedBurger] = useState<BurgerType | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const burgersPerPage = 8;

  useEffect(() => {
    const filtered = burgerData.filter((burger) => {
      const matchesFavorites = !showFavorites || burger.isFavorite;
      const matchesCategory =
        selectedCategory === "all" ||
        burger.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesTime =
        selectedTime === "all" ||
        (selectedTime === "<30mins" && burger.time < 30) ||
        (selectedTime === "<60mins" && burger.time < 60) ||
        (selectedTime === "<90mins" && burger.time < 90) ||
        (selectedTime === "<120mins" && burger.time < 120);
      const matchesSearch =
        selectedSearch === "" ||
        burger.name.toLowerCase().includes(selectedSearch.toLowerCase());

      return (
        matchesFavorites && matchesCategory && matchesTime && matchesSearch
      );
    });

    setFilteredBurgers(filtered);
    setCurrentPage(1);
  }, [
    selectedCategory,
    selectedTime,
    selectedSearch,
    showFavorites,
    burgerData,
  ]);

  const indexOfLastBurger = currentPage * burgersPerPage;
  const indexOfFirstBurger = indexOfLastBurger - burgersPerPage;
  const currentBurgers = filteredBurgers.slice(
    indexOfFirstBurger,
    indexOfLastBurger
  );

  const totalPages = Math.ceil(filteredBurgers.length / burgersPerPage);

  function handleOpenEditForm(burger: BurgerType) {
    setSelectedBurger(burger);
    setShowEditForm(true);
  }

  function handleCloseEditForm() {
    setSelectedBurger(null);
    setShowEditForm(false);
  }

  function handleOpenAddForm() {
    setShowAddForm(true);
  }

  function handleCloseAddForm() {
    setShowAddForm(false);
  }

  return (
    <div className="relative inter">
      <section className="relative flex justify-center items-center mt-10 gap-20">
        <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-between items-center">
            <Heading text="Egyptian Burgers" customClass="text-center mb-4" animation="fade-left" />
            <SubHeading
              text="Discover our authentic Egyptian burger collection. Use the filters below to find your perfect burger experience."
              customClass="text-center text-gray-500 mb-8" animation="fade-right"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full" data-aos="fade-up" data-aos-delay="100">
            <input
              type="text"
              placeholder="Search for a burger..."
              value={selectedSearch}
              onChange={(e) => setSelectedSearch(e.target.value)}
              className="w-full sm:w-[50%] rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:justify-center sm:items-baseline gap-2 sm:gap-8 min-h-[100px] relative z-[60]">
            <div className="flex flex-col w-full sm:w-auto" data-aos="fade-right" data-aos-delay="200">
              <SelectDropdown
                label="Filter by Category"
                options={categoryOptions}
                selected={
                  categoryOptions.find(
                    (option) => option.id === selectedCategory
                  ) || categoryOptions[0]
                }
                onChange={(option: OptionType) => setSelectedCategory(option.id as string)}
              />
            </div>

            <div className="flex flex-col w-full sm:w-auto" data-aos="fade-up" data-aos-delay="200">
              <SelectDropdown
                label="Filter by Preparation Time"
                options={timeOptions}
                selected={
                  timeOptions.find((option) => option.id === selectedTime) ||
                  timeOptions[0]
                }
                onChange={(option: OptionType) => setSelectedTime(option.id as string)}
              />
            </div>

            <div className="flex flex-col w-full sm:w-auto" data-aos="fade-left" data-aos-delay="200">
              <h5 className="block text-xs font-semibold uppercase tracking-wider text-emerald-700/80 mb-1 ml-1 text-left">Filter by favorites</h5>
              <button
                className={`flex gap-2.5 justify-between items-center w-full cursor-default rounded-xl border border-emerald-100 bg-white/80 backdrop-blur-md text-left text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-xs sm:text-sm py-2.5 px-4 lg:py-4 lg:px-5 transition-all duration-300 font-medium hover:bg-white hover:border-emerald-200 active:scale-[0.98] ${
                  showFavorites ? "ring-2 ring-emerald-600 border-emerald-600 text-emerald-700" : ""
                }`}
                onClick={() => setShowFavorites(!showFavorites)}
              >
                <span className="truncate">{showFavorites ? "Show All Burgers" : "Show Favorites Only"}</span>
                <CheckIcon className={`size-5 text-emerald-600 transition-opacity duration-200 ${showFavorites ? "opacity-100" : "opacity-0"}`} />
              </button>
            </div>
          </div>

          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : currentBurgers.length > 0 ? (
            <div className="flex flex-col justify-center items-center">
              {role === "admin" && (
                <Button
                  text={"Add New Burger"}
                  customFunction={handleOpenAddForm}
                />
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-2.5 mt-10">
                {currentBurgers.map((burger) => (
                  <BurgerCard
                    key={burger.id}
                    id={burger.id}
                    image={burger.image}
                    name={burger.name}
                    time={burger.time}
                    category={burger.category}
                    isFavorite={burger.isFavorite}
                    handleDeleteItem={() => deleteBurger(burger.id)}
                    handleOpenEditForm={() => handleOpenEditForm(burger)}
                    handleToggleFavorite={() => toggleFavorite(burger.id)}
                    animation={burger.id && burger.id % 2 === 0 ? "fade-up" : "fade-down"}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="col-span-full text-center text-gray-500">
              <p>No burgers found. Try adjusting your filters.</p>
            </div>
          )}

          {filteredBurgers.length > burgersPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page: number) => setCurrentPage(page)}
            />
          )}
        </div>
      </section>
      <div className="mb-20" />

      {showEditForm && (
        <EditBurgerForm
          handleForm={handleCloseEditForm}
          editBurger={editBurger}
          initialBurger={selectedBurger}
        />
      )}

      {showAddForm && (
        <AddBurgerForm
          addBurger={async (burger) => {
            await addBurger(burger);
            handleCloseAddForm();
          }}
          handleForm={handleCloseAddForm}
        />
      )}
    </div>
  );
}


