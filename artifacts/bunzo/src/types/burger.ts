export interface BurgerType {
  id?: number;
  name: string;
  time: number;
  category: string;
  image: string;
  isFavorite: boolean;
  ingredients?: string[];
  directions?: string[];
  nutritionInfo?: { name: string; measure: string }[];
}

export interface BurgerCardType {
  id?: number;
  image: string;
  name: string;
  time: number | string;
  category: string;
  isFavorite: boolean;
  customClass?: string;
  animation?: string;
  handleDeleteItem?: () => void;
  handleOpenEditForm?: () => void;
  handleToggleFavorite?: () => void;
}