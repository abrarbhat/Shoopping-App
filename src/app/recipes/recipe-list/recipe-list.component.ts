import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit {
 @Output() recipewasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This Is first simpele a list', 'http://hd.wallpaperswide.com/thumbs/danger_ahead-t2.jpg'),
    new Recipe('A Test Recipe', 'This Is second simpele a list', 'http://hd.wallpaperswide.com/thumbs/danger_ahead-t2.jpg')
  ];
  @Input() recipeSelected= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe)
  {
    this.recipewasSelected.emit(recipe);
  }
}
