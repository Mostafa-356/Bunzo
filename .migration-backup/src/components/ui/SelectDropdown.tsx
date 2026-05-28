"use client";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { SelectDropdownProps } from "../../types/form";

export default function SelectDropdown({
  label,
  options,
  selected,
  onChange,
  labelStyle,
  optionStyle,
  buttonStyle,
  animation,
}: SelectDropdownProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <div className="relative" data-aos={animation}>
          {/* Overlay Backdrop */}
          {open && (
            <div 
              className="fixed inset-0  z-[50] transition-opacity duration-300" 
              aria-hidden="true" 
            />
          )}
          
          <Label
            className={`block text-xs font-semibold uppercase tracking-wider text-emerald-700/80 mb-1 ml-1 ${labelStyle}`}
          >
            {label}
          </Label>
          <div className="relative">
            <ListboxButton 
              className={`flex gap-2.5 justify-between items-center w-full cursor-default rounded-xl bg-white/80 backdrop-blur-md text-left text-gray-900 border border-emerald-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-xs sm:text-sm py-2.5 px-4 lg:py-4 lg:px-5 transition-all duration-300 font-medium hover:bg-white hover:border-emerald-200 active:scale-[0.98] ${buttonStyle}`}
            >
              <span className="block truncate">{selected.name}</span>
              <ChevronUpDownIcon
                aria-hidden="true"
                className="size-5 text-emerald-400 transition-transform duration-300 group-data-[open]:rotate-180"
              />
            </ListboxButton>

            <ListboxOptions
              anchor="bottom start"
              transition
              className="z-[100] mt-2 max-h-72 w-[var(--button-width)] overflow-auto rounded-2xl bg-white p-2 text-base shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-200 data-[leave]:ease-in sm:text-sm no-scrollbar border border-emerald-50/50"
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.id}
                  value={option}
                  className={`group relative cursor-pointer select-none rounded-xl py-3 pl-4 pr-10 text-gray-700 data-[focus]:bg-emerald-50 data-[focus]:text-emerald-900 data-[selected]:bg-emerald-600 data-[selected]:text-white transition-all duration-150 mb-1 last:mb-0 ${optionStyle}`}
                >
                  <span className="block truncate font-medium">
                    {option.name}
                  </span>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-emerald-600 group-data-[selected]:text-white group-not-data-[selected]:hidden">
                    <CheckIcon aria-hidden="true" className="size-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </div>
      )}
    </Listbox>
  );
}
