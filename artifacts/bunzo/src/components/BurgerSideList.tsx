import { Link } from "react-router-dom";
import useBurger from "../hooks/useBurger";
import { ShuffleArray } from "../utils/arrayHelpers";
import useAOS from "../hooks/useAOS";
import thumbs_badge from "../assets/images/thumbs_badge.png";

export default function BurgerSideList() {
  const { burgerData } = useBurger();

  useAOS({
    duration: 500,
    easing: "ease-in-out",
  });

  const randomBurgers = ShuffleArray([...burgerData]).slice(0, 3);

  return (
    <div className="flex flex-col gap-5 mt-10 md:mt-20 lg:mt-10" data-aos="fade-up" data-aos-delay="400">
      <div className="flex flex-col gap-5 w-full">
        {randomBurgers.map((burger) => (
          <Link
            to={`/burgers/${burger.id}`}
            key={burger.id}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-4 transition-transform hover:translate-x-2 w-full max-w-[300px]"
          >
            <div className="w-[120px] h-[90px] rounded-lg overflow-hidden shrink-0">
              <img
                src={burger.image}
                alt={burger.name}
                className="w-full h-full max-h-28 object-cover object-center hover:scale-[1.1] transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm line-clamp-2">
                {burger.name}
              </p>
              <div className="flex gap-1 items-center">
                <img
                  src={thumbs_badge}
                  alt="rating"
                  className="h-4"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
