import { SearchField } from "./SearchField";
import { StyledSearchSection, StyledArticle } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph } from "../styles/StyledTexts";
import { StyledLoader } from "../styles/search/StyledLoader";

interface IEnglishSearchProps {
  englishFood: string;
  isLoading: boolean;
  searchHasBeenDone: boolean;
  errorFetching: boolean;
  setEnglishFood: (text: string) => void;
  setIsLoading: (textInputEntered: boolean) => void;
}

export const EnglishSearch = ({englishFood, isLoading, searchHasBeenDone, errorFetching, setEnglishFood, setIsLoading}:IEnglishSearchProps) => {
  return (
    <>
          <StyledHeading>Search food</StyledHeading>
          <Paragraph>Here you can search foods from FoodData Central!</Paragraph>

          <StyledSearchSection>
            <SearchField food={englishFood} setFood={setEnglishFood} setIsLoading={setIsLoading} englishPlaceholder="Search your food here..." />

            {isLoading && <StyledLoader></StyledLoader>}

            { searchHasBeenDone && 
              <StyledArticle> 
                <p>You searched for: {englishFood}</p> 
                { errorFetching && <div><p>Sorry, we couldn't retrieve your data just now, please try again later!</p> <p>(And make sure you searched in english!)</p> </div>}
              </StyledArticle>
            }
            
            <Paragraph> Source: U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019. fdc.nal.usda.gov.</Paragraph>
          </StyledSearchSection>
    </>
  );
};