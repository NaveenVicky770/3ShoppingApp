import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {IngrediantModel} from "../shared/ingrediant.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Chicken Soupe",
      "A simple description here",
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341",
      [
        new IngrediantModel('Chicken Pieces',12),
        new IngrediantModel('French Fries',16)
      ]),
    new Recipe(
      "Shrimpy",
      "Another  description here",
      "https://res.cloudinary.com/naveenvicky/image/upload/v1633332364/shrimp_yhmtd6.png",
    [
      new IngrediantModel('Shrimps',2),
      new IngrediantModel('Chilli sauce',1)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
  }
}
