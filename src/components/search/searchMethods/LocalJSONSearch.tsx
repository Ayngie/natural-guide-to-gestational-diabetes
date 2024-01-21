import { useState, useEffect } from "react";
import { getJSONData } from "../../../services/getJSONData";
import { SearchField } from "../searchField/SearchField";
import { FullSearchResult } from "../FullSearchResult";
import { StyledSearchSection, StyledFullSearchResults } from "../../styles/StyledWrappers";
import { StyledHeading, Paragraph, ItalicText } from "../../styles/StyledTexts";
import { StyledLoader } from "../../styles/search/StyledLoader";
import { IFoodItem } from "../../../models/IFoodItem";
import { StyledButton } from "../../styles/search/StyledSearchField";


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
  const [hideSearchButton, setHideSearchButton] = useState<boolean>(false);
  
  const [showSingleFood, setShowSingleFood] = useState<boolean>(false);

  useEffect(() => {

    //call function to get data from local JSON-file
    async function fetchJsonFood() {
      try {
        const foodData = await getJSONData(jsonFood)

        //Data found
        if (foodData.length > 0) { 
          setJsonSuccessFetching(true);
          setJsonFoodData(foodData);
          setHideSearchButton(true);
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
    
  const clickedResetSearch = () => {
    setJsonFood("");
    setJsonFoodData([]);
    setJsonSearchHasBeenDone(false);
    setJsonSuccessFetching(false);
    setHideSearchButton(false);
    setShowSingleFood(false);

  };

  return (
    <>
      <StyledHeading>Sök livsmedel</StyledHeading>
      <Paragraph>Här kan du söka fram livsmedelsdata från Livsmedelsverket för att se näringsvärden!</Paragraph>
      <Paragraph><ItalicText>Här kan du kolla bl.a. kolhydratmängden på dina livsmedel - titta då även på andel sockerarter. Det är sockerarterna som höjer blodsockret snabbast och mest. Mängden sockerarter får gärna vara max 5g / 100g om möjligt.</ItalicText></Paragraph>

      <StyledSearchSection>
      {!hideSearchButton && <SearchField setFood={setJsonFood} food={jsonFood} setIsLoading={setIsLoading}/>}
      {hideSearchButton && <StyledButton onClick={clickedResetSearch} data-cy="search-again-btn"> Sök på nytt </StyledButton>}

        { isLoading && <StyledLoader></StyledLoader> }

        { jsonSearchHasBeenDone && 
          <StyledFullSearchResults> 

            {!showSingleFood && <p>Du sökte på: {jsonFood}</p>} 

            { jsonErrorFetching && <p>Tyvärr kunde vi inte hämta din data just nu, försök gärna igen senare!</p> }

            { jsonFoodNotFound && 
              <div>
                <p>Tyvärr fanns inte det du sökte!</p> 
                <p>Kontrollera din stavning eller sök gärna något annat!</p> 
              </div>}

            { jsonSuccessFetching && <FullSearchResult foodData={jsonFoodData} showSingleFood={showSingleFood} setShowSingleFood={setShowSingleFood}></FullSearchResult> }
            
          </StyledFullSearchResults>
        }
        <Paragraph>Källa: Livsmedelsverkets livsmedelsdatabas version 2023-06-13</Paragraph>        
      </StyledSearchSection>
    </>
    );
};


