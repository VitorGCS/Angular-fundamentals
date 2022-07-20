import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe','This is simple a test', "https://1.bp.blogspot.com/-CME9aYqd6qY/XpdrgCpsaqI/AAAAAAABqzs/lfyanYq7Z_sTQahh1N08Jbk4Vs_uT5pyACPcBGAYYCw/s1600/20200415_011348.jpg"),
    new Recipe('A test Recipe','This is simple a test', "https://1.bp.blogspot.com/-CME9aYqd6qY/XpdrgCpsaqI/AAAAAAABqzs/lfyanYq7Z_sTQahh1N08Jbk4Vs_uT5pyACPcBGAYYCw/s1600/20200415_011348.jpg")

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
