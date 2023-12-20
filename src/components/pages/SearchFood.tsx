import { useEffect, useState } from "react";
import { getData } from "../../services/getData";
import { SearchField } from "../search/SearchField";
import { StyledLoader } from "../styles/search/StyledLoader";
import { StyledArticle, StyledFullSection, StyledSearchSection } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph } from "../styles/StyledTexts";

export const SearchFood = () => {
  const [food, setFood] = useState<string>("");
  const [searchHasBeenDone, setSearchHasBeenDone] = useState<boolean>(false);
  const [errorFetching, setErrorFetching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // console.log("Food: ", food);


  useEffect(() => {

    //call function to get data from API
    async function fetchFood() {
      setErrorFetching(false)
      setSearchHasBeenDone(true)
      try {
        const foodData = await getData(food);
        console.log(foodData);
      } catch (error) {
        // console.error("This is the error from SearchFood: ", error);
        setErrorFetching(true);
        return {};
      }
    }
    if (food != "") {
      console.log("Fetching food from SLV");
      fetchFood();
    }
    
    //hide loader
    setIsLoading(false);

    return () => {
    };
  }, [food]);
  
  return (
    <StyledFullSection>
      <StyledHeading>Sök livsmedel</StyledHeading>
      <Paragraph>Här kan du söka fram livsmedelsdata från Livsmedelsverket för att se näringsvärden!</Paragraph>

      <StyledSearchSection>
        <SearchField setFood={setFood} food={food} setIsLoading={setIsLoading}/>

        {isLoading && <StyledLoader></StyledLoader>}

        { searchHasBeenDone && 
          <StyledArticle> 
            <p>Du sökte på: {food}</p> 
            { errorFetching && <p>Tyvärr kunde vi inte hämta din data just nu, försök gärna igen senare!</p>}
          </StyledArticle>
        }

      </StyledSearchSection>
    </StyledFullSection>
  );
};