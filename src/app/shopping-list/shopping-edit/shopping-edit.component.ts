import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput")
  nameRef: ElementRef;
  @ViewChild("amountInput")
  amountRef: ElementRef;
  
  constructor(private shoppinglistSrvc:ShoppingListService) {}

  ngOnInit() {}
  
  onAddClick() {
    const ingrName =  this.nameRef.nativeElement.value;
    const ingrAmount = this.amountRef.nativeElement.value;
    const ingredient = new Ingredient(ingrName,ingrAmount);
    this.shoppinglistSrvc.addIngredients(ingredient);
  }
}
