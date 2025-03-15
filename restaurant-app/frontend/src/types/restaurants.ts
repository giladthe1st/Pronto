export interface Restaurant {
  id: number;
  name: string;
  deals: string[];
  menu: string;
  reviews: {
    rating: number;
    count: number;
  };
  location: string;
  distance: number;
}