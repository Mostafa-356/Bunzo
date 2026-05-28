// Restaurant Information Data
import smiling_chef from "../assets/images/smiling_chef.png";
import user_dp from "../assets/images/user_dp.png";
export interface RestaurantLocation {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
}

export const restaurantLocations: RestaurantLocation[] = [
  {
    id: 1,
    name: "Downtown Cairo",
    address: "15 Tahrir Square, Downtown, Cairo",
    phone: "+20 100 123 4567",
    hours: "Daily: 11:00 AM - 2:00 AM",
    description: "The heart of Egyptian street food culture",
    features: [
      "Original Bunzo location",
      "Street-view seating",
      "Live cooking station",
      "Cultural artifacts display",
      "Tourist information center"
    ],
    coordinates: { lat: 30.0444, lng: 31.2357 }
  },
  {
    id: 2,
    name: "Zamalek",
    address: "26 26th July Street, Zamalek, Cairo",
    phone: "+20 100 123 4568",
    hours: "Daily: 11:00 AM - 2:00 AM",
    description: "Modern dining with Nile views",
    features: [
      "Nile River views",
      "Rooftop terrace",
      "Premium dining experience",
      "Private event space",
      "Valet parking"
    ],
    coordinates: { lat: 30.0626, lng: 31.2197 }
  },
  {
    id: 3,
    name: "New Administrative Capital",
    address: "Central Business District, New Capital",
    phone: "+20 100 123 4569",
    hours: "Daily: 11:00 AM - 2:00 AM",
    description: "Contemporary Egyptian dining",
    features: [
      "Modern architecture",
      "Tech-integrated ordering",
      "Family-friendly space",
      "Drive-through service",
      "Delivery hub"
    ],
    coordinates: { lat: 30.0131, lng: 31.4914 }
  }
];

export const restaurantInfo = {
  name: "Bunzo Egyptian Burgers",
  tagline: "Egyptian Street Burgers",
  motto: "من الشارع المصري إلى طاولتك", // From Egyptian Streets to Your Table
  mottoEnglish: "From Egyptian Streets to Your Table",
  founded: "2020",
  concept: "Modern Egyptian Identity with Street-Style Appeal",
  mission: "To celebrate Egyptian culinary heritage while making it accessible to the modern world",
  vision: "To be Egypt's ambassador of street food culture to the world",
  values: [
    "Authentic Egyptian flavors",
    "Modern presentation",
    "Youth-focused culture",
    "Tourist-friendly experience",
    "Heritage preservation"
  ],
  socialMedia: {
    instagram: "@bunzo_egypt",
    facebook: "BunzoEgyptianBurgers",
    twitter: "@bunzo_egypt",
    tiktok: "@bunzo_egypt"
  },
  contact: {
    email: "hello@bunzo-egypt.com",
    phone: "+20 100 123 4567",
    website: "https://bunzo-vert.vercel.app"
  }
};

export const chefTeam = [
  {
    id: 1,
    name: "Chef Ahmed Hassan",
    role: "Head Chef & Spice Master",
    specialty: "The Pharaoh's Burger & Traditional Spice Blends",
    bio: "With over 15 years of experience in Egyptian cuisine, Chef Ahmed brings authentic flavors from his grandmother's kitchen to modern burger creations.",
    image: smiling_chef
  },
  {
    id: 2,
    name: "Chef Fatma El-Masry",
    role: "Street Food Specialist",
    specialty: "Cairo Street Classic & Traditional Techniques",
    bio: "Born and raised in Old Cairo, Chef Fatma learned the secrets of street food from the masters of Khan el-Khalili market.",
    image: user_dp
  },
  {
    id: 3,
    name: "Chef Yasmin Farouk",
    role: "Vegetarian Innovation Chef",
    specialty: "Nile Valley Veggie & Plant-Based Creations",
    bio: "A pioneer in Egyptian vegetarian cuisine, Chef Yasmin creates plant-based masterpieces that celebrate the fertility of the Nile Valley.",
    image: user_dp
  },
  {
    id: 4,
    name: "Chef Omar Khalil",
    role: "Spice & Heat Specialist",
    specialty: "Spicy Sahara & Fiery Desert Sauces",
    bio: "Known for his fearless approach to heat and spice, Chef Omar brings the fire of the Sahara to every dish he creates.",
    image: user_dp
  },
  {
    id: 5,
    name: "Chef Mariam Abdel-Rahman",
    role: "Seafood & Coastal Cuisine Chef",
    specialty: "Alexandria Seafood Delight & Mediterranean Fusion",
    bio: "Hailing from Alexandria, Chef Mariam brings the fresh flavors of Egypt's Mediterranean coast to our seafood creations.",
    image: user_dp
  }
];

export const restaurantStats = {
  yearsOfService: 4,
  burgersServed: "50,000+",
  happyCustomers: "15,000+",
  locations: 3,
  chefs: 5,
  signatureBurgers: 5,
  spiceBlends: 12,
  touristVisitors: "8,000+",
  localFavorites: "42,000+"
};