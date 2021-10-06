import {IngrediantModel} from "../shared/ingrediant.model";
// import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class ShoppingListService{
  ingrediantsChanged = new Subject<IngrediantModel[]>();
  private ingredients: IngrediantModel[]= [
    new IngrediantModel("Apple",5),
    new IngrediantModel("Tomotoes",10)
  ];

  getIngrediants(){
    return this.ingredients.slice();
  }
  addIngrediant(ingrediant: IngrediantModel){
    this.ingredients.push(ingrediant);
    this.ingrediantsChanged.next(this.ingredients.slice());
  }

  addIngrediantsFromRecipe(ingrediants: IngrediantModel[]){
    // for(let ingrediant of ingrediants){
    //   this.addIngrediant(ingrediant); lot of event emissions
    // }
    this.ingredients.push(...ingrediants);
    this.ingrediantsChanged.next(this.ingredients.slice());
    alert("Below Recipe ingrediants are added to your shopping list!")
  }
}
