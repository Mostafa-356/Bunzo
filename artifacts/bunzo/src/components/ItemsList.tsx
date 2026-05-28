import { useState } from "react";
import { ItemsListProps } from "../types/common";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ItemsList({ title, items }: ItemsListProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-4 hover:bg-gray-50 transition-colors duration-200 group"
        type="button"
        aria-expanded={isOpen}
      >
        <h2 className="font-bold text-lg text-gray-900 group-hover:text-emerald-700 transition-colors">
          {title}
        </h2>
        <ChevronDownIcon
          className={`size-5 text-emerald-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-5 pt-1">
          {items?.map((item, index) => (
            <li
              key={index}
              className="relative flex justify-start items-start py-3 border-b border-black/8 last:border-0 gap-4"
              data-aos="fade-up"
              data-aos-delay={`${index * 50}`}
            >
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 shadow-sm shadow-emerald-200"></span>
              <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
