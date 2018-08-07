import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit {
 @Output() recipewasSelected= new EventEmitter<Recipe>();
  recipes:Recipe[];
  @Input() recipeSelected= new EventEmitter();
  constructor(private recipesService:RecipesService) { }

  ngOnInit() {
    this.recipes=this.recipesService.getRecipes();
  }
  onRecipeSelected(recipe:Recipe)
  {
    this.recipewasSelected.emit(recipe);
  }
}
