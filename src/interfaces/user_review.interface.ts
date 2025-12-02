export default interface UserReview {
  id: number;
  author: string;
  picture: string;
  nacionality: string;
  text: string;
  rating: number;
  timestamp: string;
  platformLogo: string;
  platformName: string;
  userId: number;
  user: {
    id: number;
    username: string;
    email: string;
    picture: string;
  };
}
