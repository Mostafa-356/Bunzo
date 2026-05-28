import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import { BurgerType } from "../types/burger";
import { BurgerService } from "../services/burgerService";
import {
  Heading,
  UserBox,
  Badge,
  LoadingSpinner,
  OutputIcon,
} from "../components/ui";

import Newsletter from "../components/Newsletter";
import BurgerShortList from "../components/BurgerShortList";
import ItemsList from "../components/ItemsList";

import printer from "../assets/icons/printer.svg";
import share from "../assets/icons/share.svg";
import user_dp from "../assets/images/user_dp.png";
import Timer from "../assets/icons/Timer.svg";
import ForkKnife from "../assets/icons/ForkKnife.svg";
import GreenCard from "../components/GreenCard";
import BurgerSideList from "../components/BurgerSideList";
import useAOS from "../hooks/useAOS";

export default function BurgerDetails() {
  const { id } = useParams<{ id: string }>();
  const [burger, setBurger] = useState<BurgerType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useAOS({
    duration: 500,
    easing: "ease-in-out",
  });

  const fetchBurgerDetails = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const burgerData = await BurgerService.getBurgerById(parseInt(id || '0'));
      if (!burgerData) {
        throw new Error("Burger not found");
      }
      setBurger(burgerData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(
          err.message || "An error occurred while fetching burger details"
        );
      } else {
        setError("An unknown error occurred while fetching burger details");
      }
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBurgerDetails();
  }, [fetchBurgerDetails]);

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : burger ? (
        <div className="relative inter">
          <section className="relative flex justify-center items-center mt-10 gap-20">
            <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-5">
              <div className="w-full flex flex-col sm:grid sm:grid-cols-4 justify-between gap-4 md:gap-6">
                <div className="relative flex flex-col w-full col-span-3 gap-6">
                  <Heading text={burger.name} customClass="mb-4 text-center sm:text-start" animation="fade-right" data-aos-delay="100" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-2 md:gap-4 w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-4 w-full">
                      <UserBox
                        userPic={user_dp}
                        customStyle="lg:pr-6 flex-row sm:justify-start justify-center items-center sm:border-b sm:border-b-0 border-black/20"
                        animation="fade-right"
                      />

                      <div className="flex sm:hidden justify-center items-center gap-2 sm:gap-4 md:gap-5 lg:gap-6 sm:border-b border-black/20 py-1" data-aos="fade-left" data-aos-delay="200">
                        <OutputIcon icon={printer} title="PRINT" />
                        <OutputIcon icon={share} title="SHARE" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 items-center">
                      <div className="flex justify-center sm:justify-start items-center py-1 sm:border-b-0 sm:border-l rounded-none border-black/20" data-aos="fade-left" data-aos-delay="200">
                        <Badge
                          icon={Timer}
                          text="PREP TIME"
                          fontWeight="medium"
                          time={`${burger.time} minutes`}
                          customClass="gap-4 text-xs md:text-sm px-0"
                        />
                      </div>
                      <div className="flex justify-center sm:justify-start items-center h-full py-1 sm:border-l rounded-none border-black/20" data-aos="fade-left" data-aos-delay="300">
                        <Badge
                          icon={ForkKnife}
                          text={burger.category}
                          fontWeight="normal"
                          customClass="gap-4 text-xs md:text-sm px-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex sm:justify-end items-center gap-2 sm:gap-4 md:gap-5 lg:gap-6" data-aos="fade-left" data-aos-delay="300">
                  <OutputIcon icon={printer} title="PRINT" />
                  <OutputIcon icon={share} title="SHARE" />
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 justify-center lg:justify-between gap-6 md:gap-4 lg:gap-6 mt-12">
                <div className="md:col-span-1 w-full overflow-hidden rounded-3xl" data-aos="fade-up" data-aos-delay="200">
                  <img
                    src={burger.image}
                    alt={burger.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-4 lg:p-6 bg-emerald-50 rounded-3xl flex flex-col justify-between gap-6 border border-emerald-100" data-aos="fade-left" data-aos-delay="200">
                  <div className="flex flex-col gap-3  lg:gap-6 ">
                    <h2 className="font-bold text-base md:text-lg lg:text-2xl">
                      Nutrition Information
                    </h2>
                    <ul className="flex flex-col gap-2 lg:gap-4">
                      {burger.nutritionInfo?.map((info, index) => {
                        return (
                          <li
                            key={index}
                            className="flex justify-between items-center pb-2 border-b border-b-black/10 text-xs sm:text-sm md:text-base lg:text-lg font-regular gap-6"
                          >
                            <span>{info.name}</span>
                            <span className="font-medium">{info.measure}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-500 italic">
                    * Values may vary based on exact portion weights and local ingredient seasonal variations.
                  </p>
                </div>
              </div>
              <p className="mt-2 sm:mt-4 lg:mt-6 text-black/60 text-xs sm:text-sm md:text-base leading-relaxed" data-aos="fade-right" data-aos-delay="100">
                Each Bunzo burger is a labor of love, crafted using a proprietary blend of 12 Egyptian spices 
                and the finest locally-sourced meats. We take pride in our slow-prep techniques that ensure 
                every bite delivers the authentic street-food crunch and rich heritage flavors that 
                generations of Cairenes have come to adore.
              </p>
            </div>
          </section>
          <section className="flex justify-center items-center mt-20">
            <div className="w-[95%] sm:w-[90%] grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="flex flex-col gap-10 col-span-1 lg:col-span-2">
                <ItemsList items={burger.ingredients} title="Ingredients" />
                <ItemsList items={burger.directions} title="Build Description" />
              </div>
              <div className="col-span-1 grid md:grid-cols-2 lg:grid-cols-1 gap-16 w-full h-fit">
                <div className="w-full">
                  <Heading text="Other Burgers" animation="fade-left" data-aos-delay="300" />
                  <BurgerSideList />
                </div>
                <GreenCard animation="fade-left" data-aos-delay="200" />
              </div>
            </div>
          </section>

          <div className="my-20">
            <Newsletter />
          </div>

          <div className="mt-10 sm:mt-20 md:mt-30 lg:mt-40 mb-20" data-aos="fade-right" data-aos-delay="200">
            <BurgerShortList headingText="You may like these burgers too" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen text-gray-500">
          Burger not found.
        </div>
      )}
    </>
  );
}
