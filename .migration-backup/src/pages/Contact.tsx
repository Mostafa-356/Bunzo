import { useState } from "react";
import { Button, FormInput, Heading, SubHeading } from "../components/ui";
import smiling_chef from "../assets/images/smiling_chef.png";
import Newsletter from "../components/Newsletter";
import SelectDropdown from "../components/ui/SelectDropdown";
import { OptionType } from "../types/form";
import BurgerShortList from "../components/BurgerShortList";
import useAOS from "../hooks/useAOS";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/solid";

const enquiryTypeOptions = [
  { id: 1, name: "Restaurant Visit" },
  { id: 2, name: "Catering Services" },
  { id: 3, name: "Franchise Inquiry" },
  { id: 4, name: "Food Feedback" },
  { id: 5, name: "Event Booking" },
  { id: 6, name: "Tourist Information" },
  { id: 7, name: "General Inquiry" },
];

export default function Contact() {
  const [selectedEnquiryType, setSelectedEnquiryType] = useState<OptionType>();
  useAOS();

  return (
    <div className="relative inter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-20 mb-20">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col items-center gap-6">
          <Heading text="Visit Bunzo Egyptian Burgers" customClass="text-center text-white" />
          <SubHeading
            text="Experience authentic Egyptian street food culture in the heart of Cairo"
            customClass="text-center text-gray-200 max-w-3xl"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative flex justify-center items-center gap-20">
        <div className="w-[95%] sm:w-[90%] flex flex-col gap-5">
          <div className="flex flex-col justify-between items-center mb-10">
            <Heading
              text="Get in Touch"
              customClass="text-center"
              animation="fade-right"
            />
            <SubHeading
              text="We'd love to welcome you to the Bunzo family!"
              customClass="text-center text-gray-500"
              animation="fade-left"
            />
          </div>

          <div className="flex gap-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-5">
              <div
                className="relative rounded-3xl shadow-md flex justify-center items-center px-5 py-0 h-fit w-full col-span-1 order-2 lg:order-1 bg-gradient-bunzo-contact"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <img src={smiling_chef} alt="Egyptian Chef" />
              </div>

              <div className="flex flex-col col-span-1 lg:col-span-2 order-1 lg:order-2">
                <form className="flex flex-col gap-6 w-full">
                  <div className="grid grid-cols-2 gap-2.5 lg:gap-5 w-full">
                    <FormInput
                      placeholder="Enter your name"
                      type="text"
                      name="name"
                      id="name"
                      label="NAME"
                      customClass="text-gray-700"
                      inputStyle="text-sm"
                      labelStyle="text-xs"
                      required={true}
                      animation="fade-right"
                    />

                    <FormInput
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      id="email"
                      label="EMAIL"
                      customClass="text-gray-700"
                      inputStyle="text-sm"
                      labelStyle="text-xs"
                      required={true}
                      animation="fade-left"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 lg:gap-5 w-full">
                    <FormInput
                      placeholder="Enter subject"
                      type="text"
                      name="subject"
                      id="subject"
                      label="SUBJECT"
                      customClass="text-gray-700"
                      inputStyle="text-sm"
                      labelStyle="text-xs"
                      required={true}
                      animation="fade-right"
                    />

                    <SelectDropdown
                      label="Inquiry Type"
                      options={enquiryTypeOptions}
                      selected={selectedEnquiryType || enquiryTypeOptions[0]}
                      onChange={setSelectedEnquiryType}
                      buttonStyle="border border-gray-300 bg-transparent shadow:sm focus:border-emerald-500 focus:ring-emerald-500"
                      optionStyle="w-full"
                      labelStyle="text-xs font-normal text-gray-700 uppercase"
                      animation="fade-left"
                    />
                  </div>
                  <FormInput
                    isTextArea={true}
                    name="message"
                    id="message"
                    placeholder="Tell us about your visit, feedback, or inquiry..."
                    label="MESSAGE"
                    labelStyle="text-xs"
                    inputStyle="text-sm"
                    rows={5}
                    customClass="text-gray-700"
                    required={false}
                    animation="fade-up"
                  />
                  <Button
                    text="Send Message"
                    customClass="bg-emerald-600 text-white mt-6 hover:bg-emerald-700"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Locations */}
      <section className="py-20 bg-gray-50 my-20">
        <div className="w-[95%] sm:w-[90%] mx-auto">
          <Heading text="Visit Our Locations" customClass="text-center mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
              <h3 className="text-lg font-semibold text-emerald-600 mb-4">Downtown Cairo</h3>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <MapPinIcon className="size-4 text-emerald-500" /> Tahrir Square Area
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <PhoneIcon className="size-4 text-emerald-500" /> +20 100 123 4567
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <ClockIcon className="size-4 text-emerald-500" /> Daily: 11:00 AM - 2:00 AM
              </p>
              <p className="text-sm text-gray-500">The heart of Egyptian street food culture</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-semibold text-emerald-600 mb-4">Zamalek</h3>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <MapPinIcon className="size-4 text-emerald-500" /> 26th July Street
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <PhoneIcon className="size-4 text-emerald-500" /> +20 100 123 4568
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <ClockIcon className="size-4 text-emerald-500" /> Daily: 11:00 AM - 2:00 AM
              </p>
              <p className="text-sm text-gray-500">Modern dining with Nile views</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-lg font-semibold text-emerald-600 mb-4">New Capital</h3>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <MapPinIcon className="size-4 text-emerald-500" /> Central Business District
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <PhoneIcon className="size-4 text-emerald-500" /> +20 100 123 4569
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <ClockIcon className="size-4 text-emerald-500" /> Daily: 11:00 AM - 2:00 AM
              </p>
              <p className="text-sm text-gray-500">Contemporary Egyptian dining</p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <Newsletter />
      </section>

      <div className="mb-20">
        <BurgerShortList headingText="Try our signature Egyptian burgers" />
      </div>
    </div>
  );
}
