import { INutrientValue } from "./INutrientValue";

export interface IFoodItem {
    Nummer: number;
    Namn: string;
    ViktGram: number;
    Huvudgrupp: string;
    Naringsvarden: INutrientValue[];
 }