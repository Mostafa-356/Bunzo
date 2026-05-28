import { Heading, SubHeading } from "./ui";
import spicy_burger from "../assets/images/Spicy.png";
import classic_icon from "../assets/images/Classic.png";
import useAOS from "../hooks/useAOS";

export default function Newsletter() {
  useAOS({ duration: 500, easing: "ease-out-back" });
  return (
    <section className="flex justify-center items-center">
      <div className="w-[95%] sm:w-[90%] relative bg-gradient-to-br from-emerald-50 to-emerald-100 flex flex-col justify-center items-center gap-16 rounded-3xl pt-18 px-4 overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-6">
          <Heading
            text="Fresh Egyptian burgers to your inbox"
            customClass="text-black text-center"
            animation="fade-right"
          />
          <SubHeading
            text="Join the Bunzo family and be the first to know about new Egyptian burger creations, exclusive burger deals, limited-time flavors, and authentic Cairo street food stories!"
            customClass="text-center text-gray-600 max-w-4/5"
            animation="fade-left"
            data-aos-delay="300"
          />
        </div>

        <form className="grid grid-cols-4 justify-between items-center rounded-lg overflow-hidden lg:w-4/10">
          <div className="bg-white flex justify-between items-center py-4 px-6 w-full h-full col-span-3">
            <input
              type="email"
              placeholder="Enter your email for exclusive burger deals"
              className="text-xs sm:text-sm md:text-base leading-normal text-gray-700 outline-0 w-full h-full placeholder:text-gray-400"
              data-aos="fade-right"
            />
          </div>
          <button
            type="submit"
            className="h-full bg-emerald-600 hover:bg-emerald-700 px-3 py-2 text-xs sm:text-sm text-white transition-colors"
            data-aos="fade-left"
          >
            Join Family
          </button>
        </form>

        <figure>
          <img
            src={classic_icon}
            alt="Egyptian cuisine"
            className="absolute w-40 sm:w-60 lg:w-96 -bottom-20 -left-10 lg:-bottom-40 lg:-left-20"
            data-aos="fade-up"
          />
        </figure>
        <figure>
          <img
            src={spicy_burger}
            alt="Egyptian burger"
            className="absolute w-40 sm:w-60 lg:w-96 -bottom-20 -right-10 lg:-bottom-40 lg:-right-20"
            data-aos="fade-up"
          />
        </figure>
      </div>
    </section>
  );
}
