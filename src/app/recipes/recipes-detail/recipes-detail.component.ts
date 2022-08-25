import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private router: Router,private route: ActivatedRoute, private recipeServce: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) =>  {
        this.id = +param['id'];
        this.recipe = this.recipeServce.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeServce.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route });
    //this.router.navigate(['../', this.id, 'edit'],{relativeTo: this.route });
  }
}
