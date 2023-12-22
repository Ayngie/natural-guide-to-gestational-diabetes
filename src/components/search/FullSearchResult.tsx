import { useState } from "react";
import { IFoodItem } from "../../models/IFoodItem";
import { SingleSearchResult } from "./SingleSearchResult";
import { BoldText } from "../styles/StyledTexts";
import { ClickableWrapper } from "../styles/StyledWrappers";

interface IFullSearchResultProps {
  foodData: IFoodItem[],
}

export const FullSearchResult = ({foodData}: IFullSearchResultProps) => {
  const [showSingleFood, setShowSingleFood] = useState<boolean>(false);
  const [clickedFood, setClickedFood] = useState<IFoodItem>({} as IFoodItem);

  const handleClick = (foodItem: IFoodItem) => {
    setShowSingleFood(true);
    setClickedFood(foodItem);
  };

  return (
    <article>
      <h3>Search Results:</h3>

        {!showSingleFood &&
        <div>
          {foodData.map((foodItem) => (
            <ClickableWrapper key={foodItem.Livsmedelsnummer} onClick={() => handleClick(foodItem)}>
              <p><BoldText>{foodItem.Livsmedelsnamn} </BoldText> </p>
            </ClickableWrapper>
          ))
          }
        </div>
        }

        {showSingleFood &&
          <SingleSearchResult foodItem={clickedFood}></SingleSearchResult>
        }
    </article>
  );
};