export interface UserType {
  name: string;
  profilePicture: string;
}

export interface UserBoxProps {
  user?: UserType;
  userPic?: string;
  userName?: string;
  customStyle?: string;
  dateStyle?: string;
  nameStyle?: string;
  imageStyle?: string;
  postDate?: string;
  animation?: string;
}