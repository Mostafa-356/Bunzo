export interface BadgeType {
  icon: string;
  text: string;
  customClass?: string;
}

export interface BadgeProps {
  icon: string;
  text: string;
  time?: string;
  timeStyle?: string;
  fontWeight?: string;
  customClass?: string;
}

export interface ButtonType {
  text: string;
  icon: string;
  customClass?: string;
}

export interface ButtonProps {
  text: string;
  animation?: string;
  icon?: string;
  textColor?: string;
  customClass?: string;
  type?: "submit" | "reset" | "button";
  customFunction?: () => void;
}

export interface HeadingProps {
  text: string;
  animation?: string;
  customClass?: string;
}

export interface SubHeadingProps {
  text: string;
  animation?: string;
  customClass?: string;
}

export interface CategoryItemProps {
  image: string;
  name: string;
  bgColor: string;
  animation?: string;
}

export interface StickyObjectProps {
  image: string;
  customClass: string;
}

export interface DropdownProps {
  handleDeleteItem: () => void;
  handleOpenEditForm?: () => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  customStyle?: string;
}