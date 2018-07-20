import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe','this is test','https://atmedia.imgix.net/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf?auto=format&q=45&w=640.0&fit=max&cs=strip'),
    new Recipe('A second recipe','this is second test','https://images.pexels.com/photos/247685/pexels-photo-247685.png?cs=srgb&dl=assorted-diet-edible-247685.jpg&fm=jpg')
  ];

  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onrecipeSelected(recipe : Recipe){
this.recipeWasSelected.emit(recipe);
  }

}
