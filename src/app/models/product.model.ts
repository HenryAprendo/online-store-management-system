import { Rating } from '../models/rating.model';

export interface Product {
  id:number;
  title:string;
  price:number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
