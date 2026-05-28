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
    <div className="w-full min-h-10/12 flex relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl">
      <div className="relative py-10 px-6 sm:px-8 sm:py-12 md:px-10 md:py-10 bg-gradient-to-br from-emerald-50 to-green-50 sm:w-1/2 flex flex-col justify-around gap-6">
        <Badge
          icon={scroll}
          text="Hot burger"
          fontWeight="semibold"
          customClass="bg-white shadow-md absolute top-4 left-4 sm:top-6 sm:left-6"
        />

        <div className="w-full flex flex-col gap-6 max-w-[95%]">
          <div className="flex flex-col justify-between items-start gap-5 mt-10 lg:mt-16">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[52px] font-bold leading-tight text-gray-900 tracking-tight">
              {title}
            </h1>
            <p className="text-sm font-normal text-gray-500 leading-relaxed">
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
                customClass="bg-white shadow-sm text-gray-700"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mt-2">
          <UserBox userPic={user_dp} user={user} />
          <Button
            text={button.text}
            icon={button.icon === "play_icon" ? play_icon : ""}
            textColor="text-white"
            customClass="bg-gray-900 hover:bg-gray-800"
          />
        </div>
      </div>

      <div
        className="w-1/2 hidden sm:block bg-cover bg-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      ></div>

      <div className="absolute left-1/2 top-8 transform -translate-x-1/2 hidden sm:block">
        <img
          src={thumbs_badge}
          alt="Thumbs Badge"
          className="lg:size-32 md:size-24 sm:size-16 size-12 drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
