import { useState } from "react";
import { SwedishSearch } from "../search/SwedishSearch";
// import { EnglishSearch } from "../search/EnglishSearch";
import { StyledFullSection } from "../styles/StyledWrappers";

export const SearchFood = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
    
  return (
    <StyledFullSection>
      <SwedishSearch isLoading={isLoading} setIsLoading={setIsLoading}></SwedishSearch>
      {/* <EnglishSearch isLoading={isLoading} setIsLoading={setIsLoading}></EnglishSearch> */}
    </StyledFullSection>
  );
};