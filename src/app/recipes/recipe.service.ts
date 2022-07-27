import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe','This is simple a test',
      "https://1.bp.blogspot.com/-CME9aYqd6qY/XpdrgCpsaqI/AAAAAAABqzs/lfyanYq7Z_sTQahh1N08Jbk4Vs_uT5pyACPcBGAYYCw/s1600/20200415_011348.jpg",
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another test Recipe','This is simple a test',
      "https://1.bp.blogspot.com/-CME9aYqd6qY/XpdrgCpsaqI/AAAAAAABqzs/lfyanYq7Z_sTQahh1N08Jbk4Vs_uT5pyACPcBGAYYCw/s1600/20200415_011348.jpg",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService:ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
