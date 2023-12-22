import livsmedelsdatabasen from '../data/livsmedelsdatabasen.json';
import { IFoodItem } from '../models/IFoodItem';

export const getJSONData = async (searchedFood: string): Promise<IFoodItem[]> => {
    const foodArray: IFoodItem[] = livsmedelsdatabasen as IFoodItem[];
    // console.log("foodArray: ", foodArray)

    try {
        const filteredData = foodArray.filter(
            (item: IFoodItem) => item.Livsmedelsnamn.toLowerCase().includes(searchedFood.toLowerCase())
        );

        // console.log("filteredData is: ", filteredData)
        return filteredData;

    } catch (error) {
        console.error("Log of error fetching data: ", error);
        throw error;
    }
}