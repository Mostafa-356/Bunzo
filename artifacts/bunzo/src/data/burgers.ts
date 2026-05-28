// Egyptian Burger Restaurant Data
import pharaoh_burger from "../assets/images/The Pharaoh's Burger.jpg";
import cairo_classic from "../assets/images/Cairo Street Classic.jpg";
import nile_veggie from "../assets/images/VegBurger.jpg";
import spicy_sahara from "../assets/images/Spicy Sahara.jpg";
import seafood_delight from "../assets/images/Alexandria Seafood Delight.jpg";
import lamb_special from "../assets/images/Bedouin Lamb Special.jpg";

export interface BurgerData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spiceLevel: 'Mild' | 'Medium' | 'Hot' | 'Sahara Fire';
  time: number; // Changed from cookingTime to time to match BurgerType
  ingredients: string[];
  directions: string[]; // Added directions
  story: string;
  chef: string;
  isFavorite: boolean;
  isSignature: boolean;
  nutritionInfo: { name: string; measure: string }[]; // Changed to array of objects
}

export const egyptianBurgers: BurgerData[] = [
  {
    id: 1,
    name: "The Pharaoh's Burger",
    description: "Royal Egyptian experience with spiced beef, tahini sauce, and traditional herbs",
    price: 85,
    image: pharaoh_burger,
    category: "beef",
    spiceLevel: "Medium",
    time: 15, // Changed from cookingTime to time
    ingredients: [
      "Premium Egyptian beef",
      "Tahini sauce",
      "Traditional Egyptian herbs",
      "Pickled turnips",
      "Fresh tomatoes",
      "Crispy onions",
      "Baladi bread bun"
    ],
    story: "Inspired by the royal kitchens of ancient Egypt, this burger combines the finest spices that once graced pharaohs' tables with modern culinary techniques.",
    chef: "Chef Ahmed",
    isFavorite: true,
    isSignature: true,
    directions: [
      "Grill the premium Egyptian beef to perfection",
      "Spread fresh tahini sauce on the Baladi bread bun",
      "Layer with traditional herbs and pickled turnips",
      "Serve hot with crispy onions"
    ],
    nutritionInfo: [
      { name: "Calories", measure: "650" },
      { name: "Protein", measure: "35g" },
      { name: "Carbs", measure: "45g" },
      { name: "Fat", measure: "28g" }
    ]
  },
  {
    id: 2,
    name: "Cairo Street Classic",
    description: "Authentic street food flavors with traditional spices and our secret sauce",
    price: 65,
    image: cairo_classic,
    category: "beef",
    spiceLevel: "Mild",
    time: 12,
    ingredients: [
      "Fresh ground beef",
      "Egyptian street spice blend",
      "Secret garlic sauce",
      "Lettuce",
      "Tomatoes",
      "Red onions",
      "Sesame seed bun"
    ],
    story: "Born in the bustling streets of Cairo, this burger captures the authentic flavors that have made Egyptian street food legendary.",
    chef: "Chef Fatma",
    isFavorite: false,
    isSignature: true,
    directions: [
      "Prepare the street-style beef patty with spice blend",
      "Toast the sesame seed bun until golden",
      "Apply secret garlic sauce generously",
      "Assemble with fresh lettuce, tomatoes, and red onions"
    ],
    nutritionInfo: [
      { name: "Calories", measure: "580" },
      { name: "Protein", measure: "30g" },
      { name: "Carbs", measure: "42g" },
      { name: "Fat", measure: "24g" }
    ]
  },
  {
    id: 3,
    name: "Nile Valley Veggie",
    description: "Fresh falafel and herbs straight from the Nile Valley farms",
    price: 55,
    image: nile_veggie,
    category: "vegan",
    spiceLevel: "Mild",
    time: 10,
    ingredients: [
      "House-made falafel",
      "Fresh herbs from Nile Valley",
      "Cucumber yogurt sauce",
      "Arugula",
      "Cherry tomatoes",
      "Red cabbage",
      "Whole wheat bun"
    ],
    story: "Celebrating the fertile lands of the Nile Valley, this vegetarian masterpiece showcases the fresh produce that has sustained Egypt for millennia.",
    chef: "Chef Yasmin",
    isFavorite: true,
    isSignature: false,
    directions: [
      "Fry the house-made falafel in clean oil",
      "Spread cooling cucumber yogurt sauce on whole wheat bun",
      "Top with fresh Nile Valley herbs and arugula",
      "Add cherry tomatoes and red cabbage for crunch"
    ],
    nutritionInfo: [
      { name: "Calories", measure: "420" },
      { name: "Protein", measure: "18g" },
      { name: "Carbs", measure: "52g" },
      { name: "Fat", measure: "16g" }
    ]
  },
  {
    id: 4,
    name: "Spicy Sahara",
    description: "Harissa-marinated chicken with jalapeños and fiery desert sauce",
    price: 75,
    image: spicy_sahara,
    category: "chicken",
    spiceLevel: "Sahara Fire",
    time: 18,
    ingredients: [
      "Harissa-marinated chicken",
      "Jalapeño peppers",
      "Fiery desert sauce",
      "Cooling cucumber",
      "Red onions",
      "Spicy mayo",
      "Brioche bun"
    ],
    story: "For the brave souls who seek the heat of the Sahara desert. This burger brings the fire that has tested travelers for centuries.",
    chef: "Chef Omar",
    isFavorite: false,
    isSignature: true,
    directions: [
      "Marinate chicken in authentic harissa paste",
      "Grill until tender and slightly charred",
      "Apply fiery desert sauce to brioche bun",
      "Layer with jalapeños and cooling cucumber"
    ],
    nutritionInfo: [
      { name: "Calories", measure: "620" },
      { name: "Protein", measure: "32g" },
      { name: "Carbs", measure: "38g" },
      { name: "Fat", measure: "26g" }
    ]
  },
  {
    id: 5,
    name: "Alexandria Seafood Delight",
    description: "Fresh fish with Egyptian spices and coastal herbs from Alexandria",
    price: 95,
    image: seafood_delight,
    category: "specialty",
    spiceLevel: "Medium",
    time: 20,
    ingredients: [
      "Fresh Mediterranean fish",
      "Coastal herb blend",
      "Lemon tahini sauce",
      "Pickled vegetables",
      "Fresh dill",
      "Capers",
      "Artisan bun"
    ],
    story: "From the Mediterranean coast of Alexandria, this burger brings the flavors of Egypt's historic port city to your table.",
    chef: "Chef Mariam",
    isFavorite: true,
    isSignature: true,
    directions: [
      "Prepare fresh Mediterranean fish fillet with coastal herbs",
      "Lightly pan-fry until golden brown",
      "Spread lemon tahini sauce on artisan bun",
      "Top with dill, capers, and pickled vegetables"
    ],
    nutritionInfo: [
      { name: "Calories", measure: "540" },
      { name: "Protein", measure: "28g" },
      { name: "Carbs", measure: "35g" },
      { name: "Fat", measure: "22g" }
    ]
  },
  {
    id: 6,
    name: "Bedouin Lamb Special",
    description: "Traditional lamb with desert spices and mint yogurt sauce",
    price: 90,
    image: lamb_special,
    category: "lamb",
    spiceLevel: "Medium",
    time: 22,
    ingredients: [
      "Premium lamb meat",
      "Bedouin spice mix",
      "Mint yogurt sauce",
      "Grilled vegetables",
      "Fresh mint",
      "Pomegranate seeds",
      "Pita bread bun"
    ],
    story: "Honoring the nomadic Bedouin traditions, this burger features the time-honored flavors of Egypt's desert dwellers.",
    chef: "Chef Ahmed",
    isFavorite: false,
    isSignature: false,
    directions: [
      "Slow-cook premium lamb with Bedouin spice mix",
      "Prepare mint yogurt sauce",
      "Grill seasonal vegetables",
      "Stuff everything into a fresh pita bread bun with pomegranate seeds"
    ],
    nutritionInfo: [
      { name: "Calories", measure: "680" },
      { name: "Protein", measure: "38g" },
      { name: "Carbs", measure: "40g" },
      { name: "Fat", measure: "30g" }
    ]
  }
];

export const burgerCategories = [
  { id: "beef", name: "Beef Burgers", count: 2, description: "Our most celebrated Egyptian creations" },
  { id: "chicken", name: "Chicken Burgers", count: 1, description: "Spicy and flavorful poultry" },
  { id: "vegan", name: "Vegan Burgers", count: 1, description: "Plant-based Egyptian delights" },
  { id: "lamb", name: "Lamb Burgers", count: 1, description: "Traditional authentic lamb cuts" },
  { id: "specialty", name: "Specialty", count: 1, description: "Fresh and unique flavors" }
];

export const featuredBurgers = egyptianBurgers.filter(burger => burger.isSignature);
export const popularBurgers = egyptianBurgers.filter(burger => burger.isFavorite);