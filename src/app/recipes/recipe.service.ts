import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService {
  constructor() {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Lemon Rice",
      "This is a delicious flavoured rice",
      "https://2.bp.blogspot.com/-UZ79I_YCS5s/WV91yLWVgVI/AAAAAAABSjI/gvtbaNu0xyIJO9BBAcLithPrJ-h3bKXewCLcBGAs/s1600/tamarind%2Brice%2B%2528Custom%2529.jpg"
    ),
    new Recipe(
      "Vada",
      "This is a great snack",
      "https://grofers.com/recipe/wp-content/uploads/2017/03/126-1.jpg?x84191"
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
