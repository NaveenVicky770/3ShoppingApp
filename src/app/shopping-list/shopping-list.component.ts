import { Component, OnInit } from '@angular/core';
import {IngrediantModel} from "../shared/ingrediant.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngrediantModel[]= [
    new IngrediantModel("Apple",5),
    new IngrediantModel("Tomotoes",10)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient : IngrediantModel){
    this.ingredients.push(ingredient);

  }

}
