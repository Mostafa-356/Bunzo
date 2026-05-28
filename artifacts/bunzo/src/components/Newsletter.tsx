import { Heading, SubHeading } from "./ui";
import spicy_burger from "../assets/images/Spicy.png";
import classic_icon from "../assets/images/Classic.png";
import useAOS from "../hooks/useAOS";

export default function Newsletter() {
  useAOS({ duration: 500, easing: "ease-out-back" });
  return (
    <section className="flex justify-center items-center">
      <div className="w-[95%] sm:w-[90%] relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex flex-col justify-center items-center gap-12 rounded-4xl pt-16 pb-20 px-6 overflow-hidden shadow-lg border border-emerald-100/60">
        <div className="flex flex-col justify-center items-center gap-5 max-w-2xl text-center z-10">
          <Heading
            text="Fresh Egyptian burgers to your inbox"
            customClass="text-gray-900 text-center"
            animation="fade-right"
          />
          <SubHeading
            text="Join the Bunzo family and be the first to know about new Egyptian burger creations, exclusive deals, and authentic Cairo street food stories!"
            customClass="text-center text-gray-500 leading-relaxed"
            animation="fade-left"
          />
        </div>

        <form className="flex items-center gap-0 rounded-full overflow-hidden bg-white shadow-lg border border-gray-100 w-full max-w-md z-10" data-aos="fade-up">
          <div className="flex items-center flex-1 py-3 px-5">
            <input
              type="email"
              placeholder="Your email address"
              className="text-sm text-gray-700 outline-none w-full placeholder:text-gray-400 bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-3 rounded-full m-1 transition-colors whitespace-nowrap shadow-md"
          >
            Join Family
          </button>
        </form>

        <figure className="pointer-events-none">
          <img
            src={classic_icon}
            alt="Egyptian cuisine"
            className="absolute w-36 sm:w-52 lg:w-80 -bottom-16 -left-8 lg:-bottom-32 lg:-left-16 opacity-80"
            data-aos="fade-up"
          />
        </figure>
        <figure className="pointer-events-none">
          <img
            src={spicy_burger}
            alt="Egyptian burger"
            className="absolute w-36 sm:w-52 lg:w-80 -bottom-16 -right-8 lg:-bottom-32 lg:-right-16 opacity-80"
            data-aos="fade-up"
          />
        </figure>
      </div>
    </section>
  );
}
