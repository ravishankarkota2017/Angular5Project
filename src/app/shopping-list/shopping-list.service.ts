import { Ingredient } from "../shared/ingredient.model";
//import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  constructor() {}

ingredientAdded = new EventEmitter<Ingredient>();

  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];
  
  getIngredients():Ingredient[]{
    return this.ingredients;
  }

  addIngredients(ingredient:Ingredient):void{
   this.ingredients.push(ingredient);
  }

}
