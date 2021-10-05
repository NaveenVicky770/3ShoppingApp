import {IngrediantModel} from "../shared/ingrediant.model";

export class Recipe{
  public name: string;
  public  description: string;
  public imagePath : string;
  public ingredients: IngrediantModel[];
  constructor(name: string, desc: string, imagePath: string, ingredients: IngrediantModel[]) {
    this.name=name;
    this.description=desc;
    this.imagePath=imagePath;
    this.ingredients=ingredients;
  }
}
