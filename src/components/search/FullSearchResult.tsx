import { useState } from "react";
import { IFoodItem } from "../../models/IFoodItem";
import { SingleSearchResult } from "./SingleSearchResult";
import { BoldText, ItalicText } from "../styles/StyledTexts";
import { ClickableWrapper, ParagraphWrapper } from "../styles/StyledWrappers";
import { LinkToTop } from "../LinkToTop";

interface IFullSearchResultProps {
  foodData: IFoodItem[],
  showSingleFood: boolean,
  setShowSingleFood: (textInputEntered: boolean) => void;

}

export const FullSearchResult = ({foodData, showSingleFood, setShowSingleFood}: IFullSearchResultProps) => {
  const [clickedFood, setClickedFood] = useState<IFoodItem>({} as IFoodItem);

  const handleClick = (foodItem: IFoodItem) => {
    setShowSingleFood(true);
    setClickedFood(foodItem);
  };

  return (
    <article>

        {!showSingleFood &&
        <>
          <h3>Sökresultat:</h3>
          <div data-cy="searched-food-full-results">
            {foodData.map((foodItem) => (
              <ClickableWrapper key={foodItem.Livsmedelsnummer} onClick={() => handleClick(foodItem)}>
                <p data-cy="searched-food-results-listitem"><BoldText>{foodItem.Livsmedelsnamn} </BoldText> </p>
                <p>Kolhydrater (g): {foodItem["Kolhydrater, tillgängliga (g)"]}</p>
                <p>Varav sockerarter, totalt (g): {foodItem["Sockerarter, totalt (g)"]}</p>
                <ItalicText>(Vikt/Portion = per 100 g)</ItalicText>
              </ClickableWrapper>
            ))}
            
            <ParagraphWrapper> <LinkToTop/></ParagraphWrapper>
          </div>
        </>
        }

        {showSingleFood &&
          <SingleSearchResult foodItem={clickedFood}></SingleSearchResult>
        }
    </article>
  );
};