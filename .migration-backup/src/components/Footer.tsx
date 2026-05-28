import SocialMediaBox from "./SocialMediaBox";
import bunzo_logo from "../assets/bunzo_logo.svg";
import { NavLink } from "react-router-dom";
import useAOS from "../hooks/useAOS";
import { 
  SparklesIcon, 
  HomeModernIcon, 
  BoltIcon, 
  UserGroupIcon, 
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  HeartIcon
} from "@heroicons/react/24/solid";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  useAOS();

  return (
    <footer className="flex flex-col justify-center items-center w-full bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-0">
      <div className="w-[90%] max-w-[1440px] flex flex-col justify-between items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 md:col-span-2" data-aos="fade-right">
            <div className="flex items-center gap-4">
              <img
                src={bunzo_logo}
                alt="Bunzo Egyptian Burgers"
                className="h-10 w-auto opacity-90"
              />
              <p
                className="text-sm text-gray-300 max-w-md leading-relaxed italic border-l border-emerald-500/30 pl-4"
              >
                Experience the authentic taste of Egypt with our modern twist on street-style burgers. 
                From the bustling streets of Cairo to your table - we bring you the flavors that tell 
                the story of Egyptian culinary heritage.
              </p>
            </div>
            <div className="flex flex-col gap-2 pl-10" data-aos="fade-right" data-aos-delay="400">
              <p className="text-emerald-400 font-semibold text-xs tracking-wider uppercase flex items-center gap-2">
                <MapPinIcon className="size-4" /> Cairo Locations:
              </p>
              <p className="text-gray-300 text-xs">Downtown • Zamalek • New Capital</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-400 text-[10px] mt-1">
                <span className="flex items-center gap-1.5 leading-none">
                  <PhoneIcon className="size-3 text-emerald-500/70" /> +20 100 123 4567
                </span>
                <span className="flex items-center gap-1.5 leading-none">
                  <ClockIcon className="size-3 text-emerald-500/70" /> 11:00 AM - 2:00 AM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4" data-aos="fade-up">
            <h4 className="text-lg font-semibold text-emerald-400 mb-2">Quick Bites</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Signature Burgers", path: "/burgers" },
                { name: "Egyptian Specials", path: "/burgers" },
                { name: "Street Stories", path: "/blog" },
                { name: "Visit Us", path: "/contact" }
              ].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Egyptian Heritage */}
          <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold text-emerald-400 mb-2">Our Heritage</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              {[
                { icon: SparklesIcon, text: "Ancient Spices" },
                { icon: HomeModernIcon, text: "Traditional Flavors" },
                { icon: BoltIcon, text: "Modern Techniques" },
                { icon: UserGroupIcon, text: "Youth Culture" },
                { icon: MapPinIcon, text: "Tourist Favorites" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2 hover:text-emerald-400 group cursor-default">
                  <item.icon className="size-5 text-emerald-500 transition-transform duration-300 group-hover:scale-125" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-6">
          <div className="text-center sm:text-left text-sm text-gray-400">
            <p className="flex items-center justify-center sm:justify-start gap-1.5">
              &copy; {currentYear} Bunzo Egyptian Burgers. Crafted with <HeartIcon className="size-3.5 text-red-500 inline-block animate-pulse" /> in Cairo.
            </p>
            <p className="mt-1">
              Bringing Egyptian street food culture to the world, one burger at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialMediaBox variant="light" />
          </div>
        </div>

        {/* Egyptian Touch */}
        <div className="py-4 text-center" data-aos="fade-up">
          <p className="text-[10px] text-gray-600 italic">
            "من الشارع المصري إلى طاولتك" - From Egyptian Streets to Your Table
          </p>
        </div>
      </div>
    </footer>
  );
}
