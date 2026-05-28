export interface BlogCardProps {
  id?: number;
  title: string;
  image?: string;
  author?: string;
  date?: string;
  excerpt?: string;
  content?: string;
  animation?: string;
  handleDeleteItem?: () => void;
  handleOpenEditForm?: () => void;
}