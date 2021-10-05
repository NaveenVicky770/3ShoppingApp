import { Component, OnInit } from '@angular/core';
import {IngrediantModel} from "../shared/ingrediant.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngrediantModel[]= [];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngrediants();

    this.slService.ingrediantsChanged
      .subscribe((ingrediants:IngrediantModel[]) =>{
        this.ingredients = ingrediants;
      })
  }

}
