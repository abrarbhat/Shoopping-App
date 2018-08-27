import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { shoppinglistService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService{
recipeSelected=new EventEmitter<Recipe>();

 private   recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This Is first simpele a list',
         'http://hd.wallpaperswide.com/thumbs/danger_ahead-t2.jpg',[
           new Ingredient('Meat',13),
           new Ingredient('Maz',12),
         ]),
        new Recipe('A Test Recipe',
         'This Is second simpele a list',
          'http://hd.wallpaperswide.com/thumbs/danger_ahead-t2.jpg',
          [
          new Ingredient('Meat',13),
          new Ingredient('Maz',12),
        ])
      ];
constructor(private slService:shoppinglistService){}

getRecipes(){
return this.recipes.slice();
}

addIngredientsToShoppingList(ingrients:Ingredient[]){
  this.slService.addIngredient(ingrients);
}

}