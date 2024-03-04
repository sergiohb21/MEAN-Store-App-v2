export class Category{
    _id:number;
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
  
    constructor(id: number, name: string, image: string, creationAt: Date, updatedAt: Date) {
      this._id = -1;
      this.id = id;
      this.name = name;
      this.image = image;
      this.creationAt = creationAt;
      this.updatedAt = updatedAt;
    }
  }
  