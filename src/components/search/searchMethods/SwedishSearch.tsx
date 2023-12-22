import { useState, useEffect } from "react";
import { getSLVData } from "../../../services/getSLVData";
import { SearchField } from "../searchField/SearchField";
import { StyledSearchSection, StyledArticle } from "../../styles/StyledWrappers";
import { StyledHeading, Paragraph } from "../../styles/StyledTexts";
import { StyledLoader } from "../../styles/search/StyledLoader";

interface ISwedishSearchProps {
  isLoading: boolean;
  setIsLoading: (textInputEntered: boolean) => void;
}

export const SwedishSearch = ({ isLoading, setIsLoading}:ISwedishSearchProps) => {
  const [swedishFood, setSwedishFood] = useState<string>("");
  const [swedishSearchHasBeenDone, setSwedishSearchHasBeenDone] = useState<boolean>(false);
  const [swedishErrorFetching, setSwedishErrorFetching] = useState<boolean>(false);

  useEffect(() => {

    //call function to get data from API
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
    
    if (swedishFood != "") {
      console.log("Fetching food from SLV");
      fetchSwedishFood();
    }

    //hide loader
    setIsLoading(false);

    return () => {
    };
  }, [swedishFood, setIsLoading]);

  return (
    <>
      <StyledHeading>Sök livsmedel</StyledHeading>
      <Paragraph>Här kan du söka fram livsmedelsdata från Livsmedelsverkets öppna API för att se näringsvärden!</Paragraph>

      <StyledSearchSection>
        <SearchField setFood={setSwedishFood} food={swedishFood} setIsLoading={setIsLoading}/>

        {isLoading && <StyledLoader></StyledLoader>}

        { swedishSearchHasBeenDone && 
          <StyledArticle> 
            <p>Du sökte på: {swedishFood}</p> 
            { swedishErrorFetching && <p>Tyvärr kunde vi inte hämta din data just nu, försök gärna igen senare!</p>}
          </StyledArticle>
        }

        <Paragraph>Källa: Livsmedelsverkets livsmedelsdatabas version 2023-06-13</Paragraph>        
      </StyledSearchSection>
    </>
  );
};