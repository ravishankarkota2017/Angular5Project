import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

   @Input() selectedRecipeItem:Recipe;
   @Output() recipeListClicked = new EventEmitter<Recipe>();

  constructor(private recipeSrvc:RecipeService) { 
  }

  ngOnInit() {
    this.recipes = this.recipeSrvc.getRecipes();
  }

  onRecipeItemClicked(recipe: Recipe){
   this.selectedRecipeItem = recipe;
   this.recipeListClicked.emit(recipe);
  }
}