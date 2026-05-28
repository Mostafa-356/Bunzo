import { useNavigate } from "react-router-dom";
import { Heading, Button, SubHeading } from "../components/ui";
import useAOS from "../hooks/useAOS";
import missingBurger from "../assets/images/The Pharaoh's Burger.jpg";

export default function NotFound() {
  const navigate = useNavigate();
  useAOS({
    duration: 500,
    easing: "ease-in-out",
  });

  return (
    <main className="grid min-h-[70vh] place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center flex flex-col items-center justify-center">
        <img 
          src={missingBurger} 
          alt="Missing Burger" 
          className="w-48 h-48 mb-6 drop-shadow-xl" 
          data-aos="zoom-in"
        />
        <p className="text-xl font-bold text-emerald-600 mb-2 tracking-widest" data-aos="fade-up" data-aos-delay="100">404 ERROR</p>
        <Heading 
          text="Whoops, someone ate this page!" 
          animation="fade-up" 
        />
        <SubHeading 
          text="Sorry, we couldn’t find the page you’re looking for. It might have been devoured by our hungry chefs." 
          customClass="mt-6 text-gray-500 max-w-md mx-auto"
          animation="fade-up"
        />
        <div className="mt-10 flex items-center justify-center gap-x-6" data-aos="fade-up" data-aos-delay="200">
          <Button
            text="Go Back"
            customFunction={() => navigate(-1)}
          />
        </div>
      </div>
    </main>
  );
}
