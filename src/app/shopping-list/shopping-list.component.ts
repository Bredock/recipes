import { Component, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[];

  constructor(
    private _shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {

    this.ingredients = this._shoppingListService.getIngredients();
    this._shoppingListService.ingredientsChange
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );

  }

}
