import axios from "axios";
// import { IFoodDataset } from "../models/IFoodDataset";

export const getData = async <T>(food: string) => {
// export const getData = async <IFoodDataset>(food: string) => {
        console.log("Food log in getData function: ", food);

    // const apiKey = import.meta.env.VITE_API_KEY;
    // console.log("apiKey: ", apiKey);

    const livsmedelsverket_url = `http://www7.slv.se/apilivsmedel/LivsmedelService.svc/Livsmedel/Naringsvarde/20230613`;
    // console.log("test", axios.get<IFoodDataset>(livsmedelsverket_url));

    try {

        const response = await axios.get<T>(livsmedelsverket_url);
        // const response = await axios.get<IFoodDataset>(livsmedelsverket_url);

        // const response = await axios.get<T>(
        //     `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&api_key=${apiKey}`
        // );   

        console.log("Log of response data: ", response.data);
        return response.data;    
    } catch (error) {
        console.error("Log of error fetching data: ", error);
        throw error;
    }
}