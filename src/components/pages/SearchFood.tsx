import { useEffect, useState } from "react";
import { LocalJSONSearch } from "../search/searchMethods/LocalJSONSearch";
// import { SwedishSearch } from "../search/searchMethods/SwedishSearch";
// import { EnglishSearch } from "../search/EnglishSearch";
import { ForwardSlash } from "../ForwardSlash";
import { Breadcrumbs, StyledFullSection } from "../styles/StyledWrappers";
import { StyledBreadcrumb } from "../styles/StyledTexts";

export const SearchFood = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
          window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
          });
      }, 0);
    } catch (error) {
      // fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
    
  return (
    <>
      <Breadcrumbs>
        <StyledBreadcrumb to="/natural-guide-to-gestational-diabetes/" aria-label="Link to Home">Start</StyledBreadcrumb> <ForwardSlash/>
        <p>Sök livsmedel</p> 
      </Breadcrumbs>

      <StyledFullSection>
        <LocalJSONSearch isLoading={isLoading} setIsLoading={setIsLoading}></LocalJSONSearch>
        {/* <SwedishSearch isLoading={isLoading} setIsLoading={setIsLoading}></SwedishSearch> */}
        {/* <EnglishSearch isLoading={isLoading} setIsLoading={setIsLoading}></EnglishSearch> */}
      </StyledFullSection>
    </>
  );
};