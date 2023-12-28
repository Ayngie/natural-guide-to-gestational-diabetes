import { IArticle } from "./IArticle";
import { IRecipe } from "./IRecipe";

export interface IArticlesData {
    life: IArticle[];
    training: IArticle[];
    food: IArticle[];
    recipes: IRecipe[];
}