import {IngrediantModel} from "../shared/ingrediant.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
  ingrediantsChanged = new EventEmitter<IngrediantModel[]>();
  private ingredients: IngrediantModel[]= [
    new IngrediantModel("Apple",5),
    new IngrediantModel("Tomotoes",10)
  ];

  getIngrediants(){
    return this.ingredients.slice();
  }
  addIngrediant(ingrediant: IngrediantModel){
    this.ingredients.push(ingrediant);
    this.ingrediantsChanged.emit(this.ingredients.slice());
  }
}
