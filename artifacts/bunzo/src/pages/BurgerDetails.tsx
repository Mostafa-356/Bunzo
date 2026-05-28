import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BurgerService } from "../services/burgerService";
import { BurgerType } from "../types/burger";
import { BURGER_QUERY_KEYS } from "../hooks/useBurger";
import { queryClient } from "../lib/queryClient";
import { slugify } from "../utils/slug";
import {
  Heading,
  UserBox,
  Badge,
  BurgerCardSkeleton,
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
  const { slug } = useParams<{ slug: string }>();

  useAOS({ duration: 500, easing: "ease-in-out" });

  const {
    data: burger,
    isLoading,
    error,
  } = useQuery({
    queryKey: BURGER_QUERY_KEYS.bySlug(slug || ""),
    queryFn: () => BurgerService.getBurgerBySlug(slug || ""),
    initialData: () => {
      const all = queryClient.getQueryData<BurgerType[]>(BURGER_QUERY_KEYS.all);
      return all?.find((b) => slugify(b.name) === slug) ?? undefined;
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  });

  if (isLoading) return (
    <div className="flex justify-center items-center mt-16 px-6">
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {Array.from({ length: 3 }).map((_, i) => <BurgerCardSkeleton key={i} />)}
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        <p>{error instanceof Error ? error.message : "Failed to load burger."}</p>
      </div>
    );
  }

  if (!burger) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Burger not found.
      </div>
    );
  }

  const handlePrint = () => window.print();

  const handleShare = async () => {
    const url = window.location.href;
    const title = burger.name;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (_) {}
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="relative inter">
      {/* ── Header ── */}
      <section className="flex justify-center items-center mt-10">
        <div className="w-[95%] sm:w-[90%] flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <Heading
              text={burger.name}
              customClass="text-start max-w-2xl"
              animation="fade-right"
            />
            <div className="flex items-center gap-3 shrink-0" data-aos="fade-left" data-aos-delay="200">
              <OutputIcon icon={printer} title="Print" onClick={handlePrint} />
              <OutputIcon icon={share} title="Share" onClick={handleShare} />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-gray-100" data-aos="fade-up" data-aos-delay="100">
            <UserBox
              userPic={user_dp}
              customStyle="flex-row items-center pr-4 border-r border-gray-200"
              animation=""
            />
            <Badge icon={Timer} text="Prep Time" fontWeight="medium" time={`${burger.time} min`} customClass="gap-3 text-sm px-0" />
            <div className="h-4 w-px bg-gray-200" />
            <Badge icon={ForkKnife} text={burger.category} fontWeight="normal" customClass="gap-3 text-sm px-0 capitalize" />
          </div>
        </div>
      </section>

      {/* ── Hero: Image + Nutrition ── */}
      <section className="flex justify-center items-center mt-10">
        <div className="w-[95%] sm:w-[90%] grid md:grid-cols-5 gap-6">
          <div
            className="md:col-span-3 w-full overflow-hidden rounded-3xl shadow-lg max-h-[480px]"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={burger.image}
              alt={burger.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="md:col-span-2 flex flex-col gap-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="flex-1 p-6 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-xl text-gray-900">Nutrition Info</h2>
                <ul className="flex flex-col divide-y divide-black/8">
                  {burger.nutritionInfo?.map((info, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center py-2.5 text-sm"
                    >
                      <span className="text-gray-600">{info.name}</span>
                      <span className="font-semibold text-gray-900">{info.measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-gray-400 italic leading-relaxed">
                * Values may vary based on exact portion weights and local ingredient seasonal variations.
              </p>
            </div>

            <p
              className="text-gray-500 text-sm leading-relaxed px-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Each Bunzo burger is a labor of love, crafted with a blend of 12 Egyptian spices and
              the finest locally-sourced meats — delivering the authentic street-food flavors that
              generations of Cairenes have come to adore.
            </p>
          </div>
        </div>
      </section>

      {/* ── Content: Ingredients, Directions, Sidebar ── */}
      <section className="flex justify-center items-center mt-12 mb-4">
        <div className="w-[95%] sm:w-[90%] grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex flex-col gap-4 col-span-1 lg:col-span-2">
            <ItemsList items={burger.ingredients} title="Ingredients" />
            <ItemsList items={burger.directions} title="Build Description" />
          </div>
          <div className="col-span-1 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-8 w-full h-fit">
            <div className="w-full">
              <Heading text="Other Burgers" animation="fade-left" data-aos-delay="200" customClass="mb-4" />
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
  );
}
