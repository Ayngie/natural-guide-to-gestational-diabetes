import { useState, useEffect } from "react";
import { SearchField } from "../searchField/SearchField";
import { StyledSearchSection, StyledArticle } from "../../styles/StyledWrappers";
import { StyledHeading, Paragraph } from "../../styles/StyledTexts";
import { StyledLoader } from "../../styles/search/StyledLoader";


interface IJSONSearchProps {
  isLoading: boolean;
  setIsLoading: (textInputEntered: boolean) => void;
}

export const LocalJSONSearch = ({ isLoading, setIsLoading}:IJSONSearchProps) => {
  const [jsonFood, setJsonFood] = useState<string>("");
  const [jsonSearchHasBeenDone, setJsonSearchHasBeenDone] = useState<boolean>(false);
  const [jsonErrorFetching, setJsonErrorFetching] = useState<boolean>(false);
  
  useEffect(() => {

        //call function to get data from local JSON-file
        async function fetchJsonFood() {
          setJsonErrorFetching(false)
          setJsonSearchHasBeenDone(true)
    
          try {
            const foodData = "...await getJSONData..."
            console.log(foodData);
            } catch (error) {
            // console.error("This is the error from SearchFood for JSON-data search: ", error);
            setJsonErrorFetching(true);
            return {};
          }  
        }
        
        if (jsonFood != "") {
          console.log("Fetching food from JSON-file");
          fetchJsonFood()
        }
    
        //hide loader
        setIsLoading(false);
    
        return () => {
        };
      }, [jsonFood, setIsLoading]);
    
    
  return (
    <>
      <StyledHeading>Sök livsmedel</StyledHeading>
      <Paragraph>Här kan du söka fram livsmedelsdata från Livsmedelsverket för att se näringsvärden!</Paragraph>


      <StyledSearchSection>
        <SearchField setFood={setJsonFood} food={jsonFood} setIsLoading={setIsLoading}/>

        {isLoading && <StyledLoader></StyledLoader>}

        { jsonSearchHasBeenDone && 
          <StyledArticle> 
            <p>Du sökte på: {jsonFood}</p> 
            { jsonErrorFetching && <p>Tyvärr kunde vi inte hämta din data just nu, försök gärna igen senare!</p>}
          </StyledArticle>
        }
        <Paragraph>Källa: Livsmedelsverkets livsmedelsdatabas version 2023-06-13</Paragraph>        
      </StyledSearchSection>
    </>
    );
};


