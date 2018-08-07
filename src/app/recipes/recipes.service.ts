import { Recipe } from "./recipe.model";

export class RecipesService{
 private   recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This Is first simpele a list', 'http://hd.wallpaperswide.com/thumbs/danger_ahead-t2.jpg'),
        new Recipe('A Test Recipe', 'This Is second simpele a list', 'http://hd.wallpaperswide.com/thumbs/danger_ahead-t2.jpg')
      ];
getRecipes(){
return this.recipes.slice();
}

}