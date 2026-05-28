import { Link } from "react-router-dom";
import { BlogCardProps } from "../types/blog";
import { Dropdown } from "./ui";
import { formatDate } from "../utils/utilFunctions";
import { useGlobalContext } from "../GlobalContext";

export default function BlogCard({
  id,
  title,
  image,
  author,
  date,
  excerpt,
  handleDeleteItem,
  handleOpenEditForm,
  animation,
}: BlogCardProps) {
  const { role } = useGlobalContext();

  return (
    <div
      key={id}
      className="relative flex flex-col sm:flex-row gap-4 items-center rounded-3xl p-3 sm:p-4 bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
      data-aos={animation}
    >
      <Link to={`/blog/${id}`} className="flex-shrink-0">
        <figure className="relative h-fit size-60 sm:size-auto sm:w-36 md:w-40 lg:w-44 rounded-2xl overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-[1.06] transition-transform duration-500"
          />
        </figure>
      </Link>
      <div className="flex flex-col justify-between items-start gap-3 w-full h-full py-1">
        <div className="flex flex-col gap-2 justify-center items-center sm:justify-start sm:items-start w-full">
          <Link
            to={`/blog/${id}`}
            className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors leading-snug"
          >
            {title}
          </Link>
          <p className="text-xs sm:text-sm text-center sm:text-start text-gray-500 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
            {author?.charAt(0) || "B"}
          </div>
          <p className="text-xs text-gray-400 font-medium">
            {author} · {date && formatDate(date)}
          </p>
        </div>
      </div>

      {role === "admin" && (
        <div className="absolute bottom-[1%] sm:bottom-[45%] right-2">
          <Dropdown
            handleDeleteItem={handleDeleteItem || (() => {})}
            handleOpenEditForm={handleOpenEditForm || (() => {})}
          />
        </div>
      )}
    </div>
  );
}
