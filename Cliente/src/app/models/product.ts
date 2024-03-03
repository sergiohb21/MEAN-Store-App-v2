export class Product {
    _id?: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: number;
  
    constructor(
      title: string,
      price: number,
      description: string,
      image: string,
      category: number
    ) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.image = image;
      this.category = category;
    }
  }
  