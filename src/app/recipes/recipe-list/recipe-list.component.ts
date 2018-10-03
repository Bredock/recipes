import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://images-gmi-pmc.edge-generalmills.com/2157c0dc-2a0e-4039-9339-1eccfd4c9556.jpg'),
    new Recipe('A test recipe', 'This is simply a test',
      'https://images-gmi-pmc.edge-generalmills.com/2157c0dc-2a0e-4039-9339-1eccfd4c9556.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
