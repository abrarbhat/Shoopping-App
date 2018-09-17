import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { shoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredient>();
  
  constructor(private slService:shoppinglistService) { }

  
  ngOnInit() {
  
  }
  onAddItem()
  {
    const amount_Input= this.amountInputRef.nativeElement.value;
    const name_Input= this.nameInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name_Input,amount_Input);
    this.slService.addIngredient(newIngredient[0]);

  }



}
