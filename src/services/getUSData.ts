import axios from "axios";

export const getUSData = async <T>(food: string) => {

    const apiKey = import.meta.env.VITE_API_KEY;
    // console.log("apiKey: ", apiKey);

    try {
        const response = await axios.get<T>(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&api_key=${apiKey}`);
        console.log("Log of response data: ", response.data);
        return response.data;    
    } catch (error) {
        console.error("Log of error fetching data: ", error);
        throw error;
    }
}