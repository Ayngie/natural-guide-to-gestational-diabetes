import { useEffect, useState } from "react";
import { getSLVData } from "../../services/getSLVData";
import { getUSData } from "../../services/getUSData";
import { SwedishSearch } from "../search/SwedishSearch";
import { EnglishSearch } from "../search/EnglishSearch";
import { StyledFullSection } from "../styles/StyledWrappers";

export const SearchFood = () => {
  const [swedishFood, setSwedishFood] = useState<string>("");
  const [englishFood, setEnglishFood] = useState<string>("");
  const [swedishSearchHasBeenDone, setSwedishSearchHasBeenDone] = useState<boolean>(false);
  const [englishSearchHasBeenDone, setEnglishSearchHasBeenDone] = useState<boolean>(false);
  const [swedishErrorFetching, setSwedishErrorFetching] = useState<boolean>(false);
  const [englishErrorFetching, setEnglishErrorFetching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // console.log("Food: ", food);


  useEffect(() => {

    //call functions to get data from API:s
    
    async function fetchSwedishFood() {
      setSwedishErrorFetching(false)
      setSwedishSearchHasBeenDone(true)

      try {
        const foodData = await getSLVData();
        console.log(foodData);
        } catch (error) {
        // console.error("This is the error from SearchFood for SLV search: ", error);
        setSwedishErrorFetching(true);
        return {};
      }  
    }
    
    async function fetchEnglishFood(englishFood?: string) {
      setEnglishErrorFetching(false)
      setEnglishSearchHasBeenDone(true)

      try {
        const foodData = await getUSData(englishFood || "");
        console.log(foodData);
        } catch (error) {
        // console.error("This is the error from SearchFood for SLV search: ", error);
        setEnglishErrorFetching(true);
        return {};
      }
    }

    if (swedishFood != "") {
      console.log("Fetching food from SLV");
      fetchSwedishFood();
    }
    else if (englishFood != "") {
      console.log("Fetching food from FoodData Central");
      fetchEnglishFood(englishFood);
    }
    
    //hide loader
    setIsLoading(false);

    return () => {
    };
  }, [swedishFood, englishFood]);
  
  return (
    <StyledFullSection>
      <SwedishSearch swedishFood={swedishFood} setSwedishFood={setSwedishFood} isLoading={isLoading} searchHasBeenDone={swedishSearchHasBeenDone} errorFetching={swedishErrorFetching} setIsLoading={setIsLoading}></SwedishSearch>
      <EnglishSearch englishFood={englishFood} setEnglishFood={setEnglishFood} isLoading={isLoading} searchHasBeenDone={englishSearchHasBeenDone} errorFetching={englishErrorFetching} setIsLoading={setIsLoading}></EnglishSearch>
    </StyledFullSection>
  );
};