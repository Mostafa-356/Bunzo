import { useState } from "react";

import signature_icon from "./assets/images/Signature.png";
import classic_icon from "./assets/images/Classic.png";
import vegetarian_icon from "./assets/images/Vegetarian.png";
import spicy_icon from "./assets/images/Spicy.png";
import seafood_icon from "./assets/images/Seafood.png";
import traditional_icon from "./assets/images/Traditional.png";

import pharaoh_burger_img from "./assets/images/The Pharaoh's Burger.jpg";
import cairo_classic_img from "./assets/images/Cairo Street Classic.jpg";
import nile_veggie_img from "./assets/images/VegBurger.jpg";
import spicy_sahara_img from "./assets/images/Spicy Sahara.jpg";

import smiling_chef from "./assets/images/smiling_chef.png";
import tomato from "./assets/images/tomato.png";
import onion from "./assets/images/onion.png";
import instagram_white from "./assets/icons/instagram_white.svg";

import {
  Button,
  CategoryItem,
  Heading,
  LoadingSpinner,
  StickyObject,
  SubHeading,
} from "./components/ui";
import { BurgerType } from "./types/burger";

import Burger from "./components/BurgerCard";
import Newsletter from "./components/Newsletter";
import EditBurgerForm from "./components/EditBurger";
import HeroSection from "./components/HomeHeroSection";

import useBurger from "./hooks/useBurger";
import useAOS from "./hooks/useAOS";
function App() {
  useAOS({
    duration: 500,
    easing: "ease-in-out",
  });

  const {
    burgerData,
    isLoading,
    error,
    editBurger,
    deleteBurger,
    toggleFavorite,
  } = useBurger();

  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [selectedBurger, setSelectedBurger] = useState<BurgerType | null>(null);

  const categories = [
    { image: signature_icon, name: "Signature", bgColor: "#F7F8F4" },
    { image: classic_icon, name: "Classic", bgColor: "#FAFDF8" },
    { image: vegetarian_icon, name: "Vegetarian", bgColor: "#FBECEB" },
    { image: spicy_icon, name: "Spicy", bgColor: "#FEF7E9" },
    { image: seafood_icon, name: "Seafood", bgColor: "#F4F4F4" },
    { image: traditional_icon, name: "Traditional", bgColor: "#F5F5F5" },
  ];
  const posts = [
    { image: pharaoh_burger_img, name: "The Pharaoh's Burger Special" },
    { image: cairo_classic_img, name: "Cairo Street Classic Burger" },
    { image: nile_veggie_img, name: "Nile Valley Veggie Burger" },
    { image: spicy_sahara_img, name: "Spicy Sahara Burger Heat" },
  ];


  function handleOpenEditForm(burger: BurgerType) {
    setSelectedBurger(burger);
    setShowEditForm(true);
  }

  function handleCloseEditForm() {
    setSelectedBurger(null);
    setShowEditForm(false);
  }

  return (
    <div className="pt-10 relative inter">
      <HeroSection />

      <section className="flex justify-center items-center mt-40">
        <div className="w-[95%] sm:w-[90%] flex flex-col gap-18">
          <div className="flex justify-between items-center mb-10">
            <Heading text="Burger Categories" animation="fade-right" />

            <Button
              text="Explore All Flavors"
              customClass="bg-emerald-100 text-emerald-800 shadow-md hover:bg-emerald-200"
              animation="fade-left"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-6">
            {categories &&
              categories.map((category, index) => (
                <CategoryItem
                  key={index}
                  image={category.image}
                  name={category.name}
                  bgColor={category.bgColor}
                  animation={index % 2 === 0 ? "fade-up" : "fade-down"}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="relative flex justify-center items-center mt-40 gap-20">
        <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-18">
          <div className="flex flex-col justify-between items-center">
            <Heading
              text="Authentic Egyptian Street Burgers"
              customClass="mb-6"
              animation="fade-left"
            />
            <SubHeading
              text="Experience the rich flavors of Egypt with our signature burgers. Each bite tells a story of ancient spices, modern techniques, and the vibrant street food culture that makes Cairo legendary."
              customClass="text-center text-gray-500"
              animation="fade-right"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl">
            {isLoading && <LoadingSpinner />}
            {error && <p className="text-red-500">{error}</p>}
            {burgerData &&
              burgerData
                .slice(0, 9)
                .map((burger: BurgerType) => (
                  <Burger
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
                    customClass="p-2.5"
                    animation={
                      burger.id && burger.id % 2 === 0 ? "fade-up" : "fade-down"
                    }
                  />
                ))}
          </div>
        </div>

        {showEditForm && (
          <EditBurgerForm
            editBurger={async (id, burger) => {
              await editBurger(id, burger);
              handleCloseEditForm();
            }}
            handleForm={handleCloseEditForm}
            initialBurger={selectedBurger}
          />
        )}
      </section>

      <section className="w-full flex justify-center items-center mt-36 mb-40">
        <div className="w-[95%] sm:w-[90%] flex flex-col sm:flex-row justify-between items-center gap-20">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-start gap-8 sm:gap-12 md:gap-14 lg:gap-18">
            <div className="flex flex-col justify-center items-start gap-6">
              <Heading
                text="Every Egyptian deserves the perfect burger experience"
                customClass="tracking-tight max-w-[90%]"
                animation="fade-left"
              />
              <SubHeading
                text="From the bustling streets of Cairo to modern kitchens, we've perfected the art of Egyptian street food. Our burgers blend traditional spices with contemporary techniques, creating flavors that celebrate our heritage while appealing to the modern palate."
                customClass="max-w-[90%] text-gray-500"
                animation="fade-right"
              />
            </div>

            <Button
              text="Discover Our Story"
              textColor="text-white"
              customClass="bg-emerald-600 hover:bg-emerald-700"
              animation="fade-up"
            />
          </div>

          <div
            className="w-11/12 sm:w-1/2 relative rounded-3xl shadow-md flex justify-center items-center bg-gradient-bunzo-light"
            data-aos="fade-left"
          >
            <img
              src={smiling_chef}
              alt="Professional Bunzo Chef"
              className="-ml-12 lg:-ml-28 w-full max-w-md object-contain"
              data-aos="fade-left"
              data-aos-delay="300"
            />
            <StickyObject image={tomato} customClass=" bottom-1/5 -left-5" />
            <StickyObject image={signature_icon} customClass="top-1 left-1/10 size-16" />
            <StickyObject image={onion} customClass="top-1/6 left-4/6" />
            <StickyObject image={traditional_icon} customClass="top-4/12 left-10/12 size-20" />
          </div>
        </div>
      </section>

      <section className="mb-28 flex justify-center items-center">
        <div
          className="relative w-[95%] sm:w-[90%] bg-black flex flex-col justify-center items-center gap-10 rounded-2xl py-14 bg-cover bg-center bg-no-repeat overflow-hidden bg-community"
        >
          <div className="absolute w-full h-full bg-black backdrop-3xl opacity-80"></div>
          <div className="flex flex-col justify-center items-center gap-6 z-10">
            <Heading
              text="Join the Bunzo Family"
              customClass="mb-6 text-white text-center max-w-5/6"
              animation="fade-up"
            />
            <SubHeading
              text="Become part of Egypt's most beloved burger community. Share your street food stories, discover new flavors, and connect with fellow food lovers who appreciate authentic Egyptian cuisine."
              customClass="text-center text-white max-w-5/6"
              animation="fade-up"
              data-aos-delay="300"
            />
          </div>

          <div className="flex justify-center items-center mt-10 z-10">
            <Button
              text="Join Our Community"
              textColor="text-emerald-800"
              customClass="bg-white hover:bg-gray-100"
              animation="fade-up"
              data-aos-delay="500"
            />
          </div>
        </div>
      </section>

      <section
        className="mb-32 flex justify-center items-center py-18 bg-gradient-bunzo-instagram"
      >
        <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-10 rounded-2xl">
          <div className="flex flex-col justify-center items-center gap-6">
            <Heading
              text="Follow @bunzo_egypt on Instagram"
              customClass="text-center"
              animation="fade-right"
            />
            <SubHeading
              text="Get inspired by our daily burger creations, behind-the-scenes stories from Egyptian kitchens, and the vibrant street food culture that defines our brand. See how tradition meets innovation!"
              customClass="text-center text-gray-500"
              animation="fade-left"
              data-aos-delay="300"
            />
          </div>
          <div className="  flex flex-col justify-center items-center gap-16">
            <div className="flex flex-wrap justify-center items-center gap-4 w-full">
              {posts &&
                posts.map((post, index) => (
                  <div key={index}>
                    <img
                      src={post.image}
                      alt={post.name}
                      className="rounded-xl shadow-md max-w-64"
                      data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                      data-aos-delay={index * 100}
                    />
                  </div>
                ))}
            </div>

            <Button
              text="Visit Our Instagram"
              icon={instagram_white}
              textColor="text-white"
              customClass="bg-emerald-600 hover:bg-emerald-700"
              animation="fade-up"
            />
          </div>
        </div>
      </section>



      <section data-aos="fade-left" className="mb-20">
        <Newsletter />
      </section>
    </div>
  );
}

export default App;
