import { ChangeEvent, FormEvent, useState } from "react";
import { StyledButton, StyledForm, StyledInput } from "../../styles/search/StyledSearchField";
import { BoldText, Paragraph } from "../../styles/StyledTexts";
import { ParagraphWrapper } from "../../styles/StyledWrappers";

interface ISearchFieldProps {
  food: string;
  englishPlaceholder?: string;
  setFood: (text: string) => void;
  setIsLoading: (textInputEntered: boolean) => void;
}
  
export const SearchField = ({food, englishPlaceholder, setFood, setIsLoading}: ISearchFieldProps) => {
    const [userInput, setUserInput] = useState<string>("");
    const [foodAlreadySearched, setFoodAlreadySearched] = useState<boolean>(false);

    // console.log("UserInput: ", userInput);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formattedUserInput: string = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    
        // console.log("food: ", food, "formattedUSerInput: ", formattedUserInput);

        if (food === formattedUserInput) { 
          // console.log("same food"); 
          setFoodAlreadySearched(true);
        } 
        else {
          setFoodAlreadySearched(false);
          // console.log("not same food"); 
          setFood(formattedUserInput);
          setIsLoading(true);
        }

        setUserInput("");
    };
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    };

  return (
    <>    
      <StyledForm onSubmit={handleSubmit}>
          <StyledInput
          type="text"
          name="food"
          value={userInput}
          onChange={handleChange}
          placeholder={englishPlaceholder ?? "Sök ditt livsmedel här..."}/>
          <StyledButton data-cy="search-food-btn">Sök</StyledButton>
      </StyledForm>   
      { foodAlreadySearched && <ParagraphWrapper> <Paragraph> <BoldText> Du har redan sökt på: {food}, men sök gärna på ett nytt livsmedel. </BoldText></Paragraph> </ParagraphWrapper> }
    </>
  );
};


