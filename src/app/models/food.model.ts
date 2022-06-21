export class foodList {
  id: number;
  restaurant: string;
  dishName: string;
  description: string;
  rating: number;
  cost: number;
  imageUrl: string;

  constructor(id: number, restaurant: string, dishName: string, description: string, rating: number, cost: number, imageUrl: string)
    {
      this.id = id;
      this.restaurant = restaurant;
      this.dishName  = dishName;
      this.description = description;
      this.rating = rating;
      this.cost = cost;
      this.imageUrl = imageUrl;
    }
}
