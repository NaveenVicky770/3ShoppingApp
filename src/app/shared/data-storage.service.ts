import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService{
  // recipesChanged = new Subject<Recipe[]>();
   constructor(private http: HttpClient, private recipeService: RecipeService) {
   }


   storeRecipes(){
      const recipes = this.recipeService.getRecipes();

      this.http.put('https://recipe-book-e62ab-default-rtdb.firebaseio.com/recipes.json',recipes)
        .subscribe( response =>{
          console.log(response);
          alert("Recipes Saved in Firebase Successfully");

        });
   }

   fetchRecipes(){
    this.http.get<Recipe[]>('https://recipe-book-e62ab-default-rtdb.firebaseio.com/recipes.json')
      .subscribe(recipes =>{
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      });
   }
}
