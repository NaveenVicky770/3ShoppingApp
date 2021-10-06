import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {IngrediantModel} from "../shared/ingrediant.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService{
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>(); /* mine */

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

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(){
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice()); /* mine */
    // console.log(recipes);
  }



  addIngredientsToShoppingList(ingredients: IngrediantModel[]){
    this.slService.addIngrediantsFromRecipe(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
