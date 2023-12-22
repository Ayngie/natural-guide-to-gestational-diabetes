import { IFoodItem } from "../../models/IFoodItem";
import { ParagraphWrapper, StyledFoodItemArticle } from "../styles/StyledWrappers";

interface ISingleSearchResultProps {
  foodItem : IFoodItem,
}

export const SingleSearchResult = ({foodItem}: ISingleSearchResultProps) => {

  return (
    <div>
        <StyledFoodItemArticle>
          <ParagraphWrapper>
            <p>Du klickade på:</p>
          </ParagraphWrapper>
          <h3>{foodItem.Livsmedelsnamn}</h3>
          <section>
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
          </section>
        </StyledFoodItemArticle>
    </div>
    );
};