import { BurgerType } from "../types/burger";

export const ShuffleArray = (array: BurgerType[]) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};