import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from "@angular/core";

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

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor() {}

  ngOnInit() {}
  
  onAddClick() {
    const ingrName =  this.nameRef.nativeElement.value;
    const ingrAmount = this.amountRef.nativeElement.value;
    const ingredient = new Ingredient(ingrName,ingrAmount);
    this.ingredientAdded.emit(ingredient);
  }
}
