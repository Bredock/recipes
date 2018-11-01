import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(
        private _SLService: ShoppingListService
    ) {}

    private _recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test',
            'https://images-gmi-pmc.edge-generalmills.com/2157c0dc-2a0e-4039-9339-1eccfd4c9556.jpg',
            [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
        new Recipe('Another test recipe', 'This is simply a test',
            'https://images-gmi-pmc.edge-generalmills.com/2157c0dc-2a0e-4039-9339-1eccfd4c9556.jpg',
            [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)])
    ];

    public getRecipes() {
        return this._recipes.slice();
    }

    public AddIngredientsToSL(ingredients: Ingredient[]) {
        this._SLService.addIngredients(ingredients);

    }
}
