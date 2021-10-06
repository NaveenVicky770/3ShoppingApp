import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngrediantModel} from "../shared/ingrediant.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: IngrediantModel[]= [];
  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngrediants();

    this.igChangeSub=this.slService.ingrediantsChanged
      .subscribe((ingrediants:IngrediantModel[]) =>{
        this.ingredients = ingrediants;
      })
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

}
