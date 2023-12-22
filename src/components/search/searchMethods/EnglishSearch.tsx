import { useState, useEffect } from "react";
import { getUSData } from "../../../services/getUSData";
import { SearchField } from "../searchField/SearchField";
import { StyledSearchSection, StyledArticle } from "../../styles/StyledWrappers";
import { StyledHeading, Paragraph } from "../../styles/StyledTexts";
import { StyledLoader } from "../../styles/search/StyledLoader";

interface IEnglishSearchProps {
  isLoading: boolean;
  setIsLoading: (textInputEntered: boolean) => void;
}

export const EnglishSearch = ({ isLoading, setIsLoading}:IEnglishSearchProps) => {
  const [englishFood, setEnglishFood] = useState<string>("");
  const [englishSearchHasBeenDone, setEnglishSearchHasBeenDone] = useState<boolean>(false);
  const [englishErrorFetching, setEnglishErrorFetching] = useState<boolean>(false);

  useEffect(() => {

    //call function to get data from API
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

    if (englishFood != "") {
      console.log("Fetching food from FoodData Central");
      fetchEnglishFood(englishFood);
    }
    
    //hide loader
    setIsLoading(false);

    return () => {
    };
  }, [englishFood, setIsLoading]);
  
  return (
    <>
      <StyledHeading>Search food</StyledHeading>
      <Paragraph>Here you can search foods from FoodData Central!</Paragraph>

      <StyledSearchSection>
        <SearchField food={englishFood} setFood={setEnglishFood} setIsLoading={setIsLoading} englishPlaceholder="Search your food here..." />

        {isLoading && <StyledLoader></StyledLoader>}

        { englishSearchHasBeenDone && 
          <StyledArticle> 
            <p>You searched for: {englishFood}</p> 
            { englishErrorFetching && <div><p>Sorry, we couldn't retrieve your data just now, please try again later!</p> <p>(And make sure you searched in english!)</p> </div>}
          </StyledArticle>
        }
        
        <Paragraph> Source: U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019. fdc.nal.usda.gov.</Paragraph>
      </StyledSearchSection>
    </>
  );
};