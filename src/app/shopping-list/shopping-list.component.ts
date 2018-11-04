import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public ingredients: Ingredient[];

  private subscription: Subscription;

  constructor(
    private _shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {

    this.ingredients = this._shoppingListService.getIngredients();
    this.subscription =  this._shoppingListService.ingredientsChange
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );

  } // ngOnInit

  ngOnDestroy() {
    this.subscription.unsubscribe();
  } // ngOnDestroy
}
