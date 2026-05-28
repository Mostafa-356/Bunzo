import { BadgeType, ButtonType } from './ui';
import { UserType } from './user';

export interface HeroSlideProps {
  title: string;
  description: string;
  badges: BadgeType[];
  user: UserType;
  backgroundImage: string;
  button: ButtonType;
}

export interface HeroSlideType {
  title: string;
  description: string;
  badges: {
    icon: string;
    text: string;
    customClass?: string;
  }[];
  user: {
    name: string;
    profilePicture: string;
  };
  backgroundImage: string;
  button: {
    text: string;
    icon: string;
    customClass?: string;
  };
}