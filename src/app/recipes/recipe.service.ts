import {Recipe} from "./recipe.model";

export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe","A simple description here","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341"),
    new Recipe("A Test Recipe 2","Another  description here","https://res.cloudinary.com/naveenvicky/image/upload/v1633332364/shrimp_yhmtd6.png")
  ];
}
