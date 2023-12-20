import axios from "axios";
// import { IFoodDataset } from "../models/IFoodDataset";

export const getSLVData = async <T>() => {
// export const getData = async <IFoodDataset>(food: string) => {

    const livsmedelsverket_url = `http://www7.slv.se/apilivsmedel/LivsmedelService.svc/Livsmedel/Naringsvarde/20230613`;
    // console.log("test", axios.get<IFoodDataset>(livsmedelsverket_url));

    try {
        const response = await axios.get<T>(livsmedelsverket_url);
        // const response = await axios.get<IFoodDataset>(livsmedelsverket_url);
        console.log("Log of response data: ", response.data);
        return response.data;    
    } catch (error) {
        console.error("Log of error fetching data: ", error);
        throw error;
    }
}