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
  BurgerCardSkeleton,
  CategoryItem,
  Heading,
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
  useAOS({ duration: 500, easing: "ease-in-out" });

  const { burgerData, isLoading, error, editBurger, deleteBurger, toggleFavorite } = useBurger();

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
    <div className="relative inter">

      {/* Hero */}
      <section className="flex justify-center items-center pt-8 pb-4">
        <div className="w-[95%] sm:w-[90%]">
          <HeroSection />
        </div>
      </section>

      {/* Categories */}
      <section className="flex justify-center items-center mt-28 mb-4">
        <div className="w-[95%] sm:w-[90%] flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <Heading text="Burger Categories" animation="fade-right" />
            <Button
              text="Explore All Flavors"
              customClass="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200"
              animation="fade-left"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
            {categories.map((category, index) => (
              <CategoryItem
                key={index}
                image={category.image}
                name={category.name}
                bgColor={category.bgColor}
                animation={["zoom-in-up", "zoom-in", "flip-left", "zoom-in-up", "flip-right", "zoom-in"][index % 6]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Burgers */}
      <section className="relative flex justify-center items-center mt-28">
        <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-14">
          <div className="flex flex-col justify-center items-center gap-5 max-w-2xl text-center">
            <Heading
              text="Authentic Egyptian Street Burgers"
              customClass="text-gray-900"
              animation="zoom-in-down"
            />
            <SubHeading
              text="Experience the rich flavors of Egypt with our signature burgers. Each bite tells a story of ancient spices, modern techniques, and the vibrant street food culture that makes Cairo legendary."
              customClass="text-gray-500 leading-relaxed"
              animation="zoom-in-up"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {isLoading && Array.from({ length: 6 }).map((_, i) => <BurgerCardSkeleton key={i} />)}
            {error && <p className="col-span-full text-center text-red-500">{error}</p>}
            {!isLoading && burgerData &&
              burgerData.slice(0, 9).map((burger: BurgerType) => (
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
                  animation={burger.id && burger.id % 3 === 0 ? "zoom-in-up" : burger.id && burger.id % 3 === 1 ? "zoom-in" : "flip-up"}
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

      {/* About / Story */}
      <section className="w-full flex justify-center items-center mt-32 mb-32">
        <div className="w-[95%] sm:w-[90%] flex flex-col sm:flex-row justify-between items-center gap-16">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-start gap-8">
            <div className="flex flex-col justify-center items-start gap-5">
              <Heading
                text="Every Egyptian deserves the perfect burger experience"
                customClass="tracking-tight leading-tight text-gray-900"
                animation="fade-left"
              />
              <SubHeading
                text="From the bustling streets of Cairo to modern kitchens, we've perfected the art of Egyptian street food. Our burgers blend traditional spices with contemporary techniques, creating flavors that celebrate our heritage."
                customClass="text-gray-500 leading-relaxed"
                animation="fade-right"
              />
            </div>
            <Button
              text="Discover Our Story"
              textColor="text-white"
              customClass="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200"
              animation="fade-up"
            />
          </div>

          <div
            className="w-11/12 sm:w-1/2 relative rounded-4xl shadow-2xl border border-emerald-800/40 flex justify-center items-center bg-gradient-bunzo-hero"
            data-aos="zoom-in-left"
          >
            <img
              src={smiling_chef}
              alt="Professional Bunzo Chef"
              className="-ml-12 lg:-ml-28 w-full max-w-md object-contain"
              data-aos="fade-left"
              data-aos-delay="300"
            />
            <StickyObject image={tomato} customClass="bottom-1/5 -left-5" />
            <StickyObject image={signature_icon} customClass="top-1 left-1/10 size-16" />
            <StickyObject image={onion} customClass="top-1/6 left-4/6" />
            <StickyObject image={traditional_icon} customClass="top-4/12 left-10/12 size-20" />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="mb-24 flex justify-center items-center">
        <div className="relative w-[95%] sm:w-[90%] bg-gray-900 flex flex-col justify-center items-center gap-8 rounded-4xl py-20 bg-cover bg-center bg-no-repeat overflow-hidden bg-community shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85"></div>
          <div className="flex flex-col justify-center items-center gap-5 z-10 max-w-2xl text-center px-6">
            <Heading
              text="Join the Bunzo Family"
              customClass="text-white text-center"
              animation="fade-up"
            />
            <SubHeading
              text="Become part of Egypt's most beloved burger community. Share your street food stories, discover new flavors, and connect with fellow food lovers who appreciate authentic Egyptian cuisine."
              customClass="text-center text-white/80 leading-relaxed"
              animation="fade-up"
            />
          </div>
          <div className="flex justify-center items-center z-10">
            <Button
              text="Join Our Community"
              textColor="text-emerald-800 font-bold"
              customClass="bg-white hover:bg-gray-50 shadow-xl"
              animation="fade-up"
            />
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="mb-28 flex justify-center items-center py-16 bg-gradient-bunzo-instagram">
        <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col justify-center items-center gap-5 max-w-2xl text-center">
            <Heading
              text="Follow @bunzo_egypt on Instagram"
              customClass="text-center text-gray-900"
              animation="fade-right"
            />
            <SubHeading
              text="Get inspired by our daily burger creations, behind-the-scenes stories from Egyptian kitchens, and the vibrant street food culture that defines our brand."
              customClass="text-center text-gray-500 leading-relaxed"
              animation="fade-left"
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-10 w-full">
            <div className="flex flex-wrap justify-center items-center gap-4 w-full">
              {posts.map((post, index) => (
                <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.name}
                    className="max-w-60 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                    data-aos-delay={index * 80}
                  />
                </div>
              ))}
            </div>

            <Button
              text="Visit Our Instagram"
              icon={instagram_white}
              textColor="text-white"
              customClass="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200"
              animation="fade-up"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-20" data-aos="fade-up">
        <Newsletter />
      </section>
    </div>
  );
}

export default App;
