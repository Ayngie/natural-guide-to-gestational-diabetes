import { SearchField } from "./SearchField";
import { StyledSearchSection, StyledArticle } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph } from "../styles/StyledTexts";
import { StyledLoader } from "../styles/search/StyledLoader";

interface IEnglishSearchProps {
  swedishFood: string;
  isLoading: boolean;
  searchHasBeenDone: boolean;
  errorFetching: boolean;
  setSwedishFood: (text: string) => void;
  setIsLoading: (textInputEntered: boolean) => void;
}

export const SwedishSearch = ({swedishFood, isLoading, searchHasBeenDone, errorFetching, setSwedishFood, setIsLoading}:IEnglishSearchProps) => {
  return (
    <>
          <StyledHeading>Sök livsmedel</StyledHeading>
          <Paragraph>Här kan du söka fram livsmedelsdata från Livsmedelsverket för att se näringsvärden!</Paragraph>

          <StyledSearchSection>
            <SearchField setFood={setSwedishFood} food={swedishFood} setIsLoading={setIsLoading}/>

            {isLoading && <StyledLoader></StyledLoader>}

            { searchHasBeenDone && 
              <StyledArticle> 
                <p>Du sökte på: {swedishFood}</p> 
                { errorFetching && <p>Tyvärr kunde vi inte hämta din data just nu, försök gärna igen senare!</p>}
              </StyledArticle>
            }

          </StyledSearchSection>
    </>
  );
};