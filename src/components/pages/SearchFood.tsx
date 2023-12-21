import { useState } from "react";
import { LocalJSONSearch } from "../search/searchMethods/LocalJSONSearch";
// import { SwedishSearch } from "../search/searchMethods/SwedishSearch";
// import { EnglishSearch } from "../search/EnglishSearch";
import { StyledFullSection } from "../styles/StyledWrappers";

export const SearchFood = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
    
  return (
    <StyledFullSection>
      <LocalJSONSearch isLoading={isLoading} setIsLoading={setIsLoading}></LocalJSONSearch>
      {/* <SwedishSearch isLoading={isLoading} setIsLoading={setIsLoading}></SwedishSearch> */}
      {/* <EnglishSearch isLoading={isLoading} setIsLoading={setIsLoading}></EnglishSearch> */}
    </StyledFullSection>
  );
};