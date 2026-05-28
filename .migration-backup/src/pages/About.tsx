import { Heading, SubHeading } from "../components/ui";
import heart_story_img from "../assets/images/The Heart of Every Bunzo Burger Experience.jpg";
import ancient_flavors_img from "../assets/images/Where Ancient Flavors Meet Contemporary Taste.jpg";
import { chefTeam } from "../data/restaurant";
import { 
  SparklesIcon, 
  FireIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  HomeModernIcon 
} from "@heroicons/react/24/solid";

export default function About() {
  return (
    <div className="relative inter">
      
      <section className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-20">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col items-center gap-6">
          <Heading text="Our Egyptian Story" customClass="text-center text-white" />
          <SubHeading
            text="من الشارع المصري إلى طاولتك - From Egyptian Streets to Your Table"
            customClass="text-center text-gray-200 max-w-3xl italic"
          />
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col gap-10">
          <Heading text="The Bunzo Heritage" customClass="text-center text-gray-800" />
          <p className="text-gray-600 text-center leading-relaxed max-w-4xl mx-auto">
            Born in the vibrant streets of Cairo, Bunzo represents the soul of Egyptian street food culture. 
            We are passionate about preserving the authentic flavors that have been passed down through 
            generations while presenting them in a modern, youth-friendly way. Our burgers tell the story 
            of Egypt - from ancient spice routes to contemporary culinary innovation, creating an experience 
            that resonates with both locals and tourists seeking authentic Egyptian flavors.
          </p>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col gap-10">
          <Heading text="Our Egyptian Mission" customClass="text-center text-gray-800" />
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <img
              src={heart_story_img}
              alt="The Bunzo Heart"
              className="rounded-2xl shadow-xl max-w-full sm:max-w-xl object-cover"
            />
            <div className="text-gray-600 leading-relaxed max-w-4xl">
              <p className="mb-4">
                Our mission is to celebrate Egyptian culinary heritage while making it accessible to the modern world. 
                We bridge the gap between traditional street food culture and contemporary dining expectations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <SparklesIcon className="size-5 text-emerald-500 shrink-0" /> 
                  <span><strong>Preserve Heritage:</strong> Authentic Egyptian spices and cooking methods</span>
                </li>
                <li className="flex items-center gap-3">
                  <FireIcon className="size-5 text-emerald-500 shrink-0" /> 
                  <span><strong>Modern Innovation:</strong> Contemporary techniques with traditional flavors</span>
                </li>
                <li className="flex items-center gap-3">
                  <UserGroupIcon className="size-5 text-emerald-500 shrink-0" /> 
                  <span><strong>Youth Culture:</strong> Vibrant atmosphere that speaks to Egypt's dynamic youth</span>
                </li>
                <li className="flex items-center gap-3">
                  <GlobeAltIcon className="size-5 text-emerald-500 shrink-0" /> 
                  <span><strong>Tourist Experience:</strong> Cultural storytelling through food</span>
                </li>
                <li className="flex items-center gap-3">
                  <HomeModernIcon className="size-5 text-emerald-500 shrink-0" /> 
                  <span><strong>Street Authenticity:</strong> Capturing the essence of Cairo's food scene</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col gap-10">
          <Heading text="Our Vision for Egyptian Cuisine" customClass="text-center text-gray-800" />
          <p className="text-gray-600 text-center leading-relaxed max-w-4xl mx-auto">
            We envision Bunzo as Egypt's ambassador of street food culture to the world. By creating burgers 
            that tell Egyptian stories, we hope to inspire pride in our culinary heritage while attracting 
            food lovers from around the globe. Every bite should transport you to the bustling streets of 
            Cairo, the Mediterranean coast of Alexandria, or the fertile Nile Valley - celebrating the 
            diversity and richness of Egyptian cuisine.
          </p>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col gap-10">
          <Heading text="Meet Our Egyptian Chefs" customClass="text-center text-gray-800" />
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <img
              src={ancient_flavors_img}
              alt="Egyptian Culinary Heritage"
              className="rounded-2xl shadow-xl max-w-full sm:max-w-xl object-cover"
            />
            <div className="text-gray-600 leading-relaxed max-w-4xl">
              <p className="mb-4">
                Our kitchen is where ancient secrets meet contemporary burger art. 
                Our team of dedicated chefs works tirelessly to bring you the soul of Cairo in every bite.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {chefTeam.map((chef) => (
                  <div key={chef.id} className="flex items-center gap-4 group">
                    <img src={chef.image} alt={chef.name} className="size-16 rounded-full object-cover border-2 border-emerald-100 group-hover:border-emerald-500 transition-colors" />
                    <div>
                      <h4 className="font-semibold text-emerald-600">{chef.name}</h4>
                      <p className="text-xs text-gray-500">{chef.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col items-center gap-10">
          <Heading text="Join the Bunzo Family" customClass="text-center text-white" />
          <SubHeading
            text="Become part of Egypt's most beloved burger community. Experience authentic Egyptian street food culture, share your stories, and connect with fellow food lovers who appreciate the rich heritage of Egyptian cuisine."
            customClass="text-center text-gray-200 max-w-4xl"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 font-semibold">
              Visit Our Restaurant
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-emerald-600 transition-colors font-semibold">
              Follow @bunzo_egypt
            </button>
          </div>
        </div>
      </section>
      <div className="mb-20" />
    </div>
  );
}
