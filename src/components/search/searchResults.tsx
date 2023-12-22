import { IFoodItem } from "../../models/IFoodItem";
import { BoldText } from "../styles/StyledTexts";
import { StyledFoodItemArticle } from "../styles/StyledWrappers";

interface ISearchResultsProps {
  foodData: IFoodItem[],
}

export const SearchResults = ({foodData}: ISearchResultsProps) => {
// console.log("Food data recieved in SearchResults: ", foodData)

  return (
    <>
        <h3>Search Results:</h3>
        <div>
          {foodData.map((foodItem) => (
            <StyledFoodItemArticle key={foodItem.Livsmedelsnummer}>
              <BoldText>Livsmedelsnamn: {foodItem.Livsmedelsnamn}</BoldText>
              <p>Energi (kcal): {foodItem["Energi (kcal)"]}</p>
              <p>Energi (kJ): {foodItem["Energi (kJ)"]}</p>
              <p>Fett, totalt (g): {foodItem["Fett, totalt (g)"]}</p>
              <p>Protein (g): {foodItem["Protein (g)"]}</p>
              <p>Kolhydrater, tillgängliga (g): {foodItem["Kolhydrater, tillgängliga (g)"]}</p>
              <p>Fibrer (g): {foodItem["Fibrer (g)"]}</p>
              <p>Sockerarter, totalt (g): {foodItem["Sockerarter, totalt (g)"]}</p>
              <p>Monosackarider (g), totalt (g): {foodItem["Monosackarider (g)"]}</p>
              <p>Disackarider (g): {foodItem["Disackarider (g)"]}</p>
              <p>Tillsatt socker (g): {foodItem["Tillsatt socker (g)"]}</p>
              <p>Fritt socker (g): {foodItem["Fritt socker (g)"]}</p>
              <p>Fullkorn totalt (g): {foodItem["Fullkorn totalt (g)"]}</p>
            </StyledFoodItemArticle>
          ))}
        </div>
    </>
    );
};