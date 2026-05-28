import { UserBoxProps } from "../../types/user";
import { formatDate } from "../../utils/utilFunctions";

export const UserBox = ({
  userPic,
  userName,
  customStyle,
  dateStyle,
  nameStyle,
  imageStyle,
  postDate,
  animation,
  user,
}: UserBoxProps) => {
  return (
    <div className={`flex items-center gap-2 lg:gap-4 ${customStyle}`} data-aos={animation}>
      <figure
        className={`overflow-hidden rounded-full max-w-10 max-h-10 lg:max-w-14 lg:max-h-14 border border-black ${imageStyle}`}
      >
        <img src={user?.profilePicture || userPic} alt="User pic" />
      </figure>
      <div>
        <h3
          className={`mb-1 sm:mb-2 font-bold text-xs sm:text-sm lg:text-base ${nameStyle}`}
        >
          {user?.name || userName}
        </h3>
        <p className={`text-xs sm:text-sm font-medium ${dateStyle}`}>
          {postDate
            ? formatDate(postDate)
            : formatDate(new Date().toISOString())}
        </p>
      </div>
    </div>
  );
};