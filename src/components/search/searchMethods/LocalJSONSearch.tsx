import { useState, useEffect } from "react";
import { getJSONData } from "../../../services/getJSONData";
import { SearchField } from "../searchField/SearchField";
import { SearchResults } from "../SearchResults";
import { StyledSearchSection, StyledArticle } from "../../styles/StyledWrappers";
import { StyledHeading, Paragraph } from "../../styles/StyledTexts";
import { StyledLoader } from "../../styles/search/StyledLoader";
import { IFoodItem } from "../../../models/IFoodItem";


interface IJSONSearchProps {
  isLoading: boolean;
  setIsLoading: (textInputEntered: boolean) => void;
}

export const LocalJSONSearch = ({ isLoading, setIsLoading}:IJSONSearchProps) => {
  const [jsonFood, setJsonFood] = useState<string>("");
  const [jsonFoodData, setJsonFoodData] = useState<IFoodItem[]>([]);

  const [jsonSearchHasBeenDone, setJsonSearchHasBeenDone] = useState<boolean>(false);
  const [jsonSuccessFetching, setJsonSuccessFetching] = useState<boolean>(false);
  const [jsonFoodNotFound, setJsonFoodNotFound] = useState<boolean>(false);
  const [jsonErrorFetching, setJsonErrorFetching] = useState<boolean>(false);
  
  useEffect(() => {

    //call function to get data from local JSON-file
    async function fetchJsonFood() {
      try {
        const foodData = await getJSONData(jsonFood)

        //Data found
        if (foodData.length > 0) { 
          setJsonSuccessFetching(true);
          setJsonFoodData(foodData);
        } 
        //No data found:
        else { 
          setJsonFoodNotFound(true);
        }
      } 
      catch (error) {
        console.error("This is the error from SearchFood for JSON-data search: ", error);
        setJsonErrorFetching(true);
        return {};
      }  
    }
    
    if (jsonFood != "") {
      setJsonErrorFetching(false);
      setJsonFoodNotFound(false);
      setJsonSuccessFetching(false);
      setJsonSearchHasBeenDone(true);

      fetchJsonFood();
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

        { isLoading && <StyledLoader></StyledLoader> }

        { jsonSearchHasBeenDone && 
          <StyledArticle> 
            <p>Du sökte på: {jsonFood}</p> 

            { jsonErrorFetching && <p>Tyvärr kunde vi inte hämta din data just nu, försök gärna igen senare!</p> }

            { jsonFoodNotFound && 
              <div>
                <p>Tyvärr fanns inte det du sökte!</p> 
                <p>Kontrollera din stavning eller sök gärna något annat!</p> 
              </div>}

            { jsonSuccessFetching && <SearchResults foodData={jsonFoodData}></SearchResults> }
            
          </StyledArticle>
        }
        <Paragraph>Källa: Livsmedelsverkets livsmedelsdatabas version 2023-06-13</Paragraph>        
      </StyledSearchSection>
    </>
    );
};


