import scroll from "../assets/icons/scroll.svg";
import timer from "../assets/icons/Timer.svg";
import forkKnife from "../assets/icons/ForkKnife.svg";
import user_dp from "../assets/images/user_dp.png";
import play_icon from "../assets/icons/play_icon.svg";
import thumbs_badge from "../assets/images/thumbs_badge.png";
import { Badge, Button, UserBox } from "./ui";
import { HeroSlideProps } from "../types/hero";

export default function HeroSlide({
  title,
  description,
  badges,
  user,
  backgroundImage,
  button,
}: HeroSlideProps) {
  return (
    <div className="w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
      {/* Left — dark emerald panel */}
      <div className="relative py-10 px-6 sm:px-8 sm:py-14 md:px-12 bg-gradient-bunzo-hero sm:w-[52%] flex flex-col justify-between gap-8 z-10">
        <Badge
          icon={scroll}
          text="Hot burger"
          fontWeight="semibold"
          customClass="bg-white/10 backdrop-blur-sm text-white border border-white/20 self-start"
        />

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[54px] font-bold leading-tight text-white tracking-tight">
              {title}
            </h1>
            <p className="text-sm font-normal text-emerald-200/80 leading-relaxed max-w-sm">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                icon={badge.icon === "timer" ? timer : forkKnife}
                text={badge.text}
                fontWeight="medium"
                customClass="bg-white/10 backdrop-blur-sm text-white border border-white/20"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <UserBox
            userPic={user_dp}
            user={user}
            nameStyle="text-white"
            dateStyle="text-emerald-300"
            imageStyle="border-white/30"
          />
          <Button
            text={button.text}
            icon={button.icon === "play_icon" ? play_icon : ""}
            textColor="text-gray-900 font-semibold"
            customClass="bg-white hover:bg-emerald-50 shadow-xl"
          />
        </div>
      </div>

      {/* Right — burger image with left-edge blend */}
      <div
        className="flex-1 hidden sm:block bg-cover bg-center relative"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#022c22] to-transparent z-10" />
      </div>

      {/* Thumbs badge */}
      <div className="absolute left-1/2 top-8 transform -translate-x-1/2 hidden sm:block z-20">
        <img
          src={thumbs_badge}
          alt="Thumbs Badge"
          className="lg:size-32 md:size-24 sm:size-16 size-12 drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
