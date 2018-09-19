import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient[] = [];

  constructor(private shoppinglistSrvc: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistSrvc.getIngredients();
  }
  
}
