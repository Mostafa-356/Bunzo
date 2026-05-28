export const BURGER_CATEGORIES = [
  { id: "beef", name: "Beef Burgers" },
  { id: "chicken", name: "Chicken Burgers" },
  { id: "lamb", name: "Lamb Burgers" },
  { id: "vegan", name: "Vegan Burgers" },
  { id: "specialty", name: "Specialty" },
];

export const CATEGORY_OPTIONS = [
  { id: "all", name: "All Categories" },
  ...BURGER_CATEGORIES,
];

export const TIME_OPTIONS = [
  { id: "all", name: "All Times" },
  { id: "<30mins", name: "Less than 30 mins" },
  { id: "<60mins", name: "Less than 60 mins" },
  { id: "<90mins", name: "Less than 90 mins" },
  { id: "<120mins", name: "Less than 120 mins" },
];