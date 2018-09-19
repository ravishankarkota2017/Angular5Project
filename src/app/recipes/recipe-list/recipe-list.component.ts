import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lemon Rice', 'This is a delicious flavoured rice', 'https://2.bp.blogspot.com/-UZ79I_YCS5s/WV91yLWVgVI/AAAAAAABSjI/gvtbaNu0xyIJO9BBAcLithPrJ-h3bKXewCLcBGAs/s1600/tamarind%2Brice%2B%2528Custom%2529.jpg'),
    new Recipe('Vada', 'This is a great snack', 'https://grofers.com/recipe/wp-content/uploads/2017/03/126-1.jpg?x84191')
  ];

   @Input() selectedRecipeItem:Recipe;
   @Output() recipeListClicked = new EventEmitter<Recipe>();

  constructor() { 
    this.selectedRecipeItem = this.recipes[0]
  }

  ngOnInit() {
  }

  onRecipeItemClicked(recipe: Recipe){
   this.selectedRecipeItem = recipe;
   this.recipeListClicked.emit(recipe);
  }
}