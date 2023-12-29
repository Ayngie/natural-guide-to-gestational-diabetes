import { IFoodItem } from "../../models/IFoodItem";
import { LinkToTop } from "../LinkToTop";
import { ItalicText } from "../styles/StyledTexts";
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
            <p>Kolhydrater (g): {foodItem["Kolhydrater, tillgängliga (g)"]}</p>
            <p>Varav sockerarter, totalt (g): {foodItem["Sockerarter, totalt (g)"]}</p>

            <p><ItalicText>(Vikt/Portion = per 100 g)</ItalicText></p>

            <h4>Extra info:</h4>         
                 
            <p>Energi (kcal): {foodItem["Energi (kcal)"]}</p>
            <p>Energi (kJ): {foodItem["Energi (kJ)"]}</p>
            <p>Fett, totalt (g): {foodItem["Fett, totalt (g)"]}</p>
            <p>Protein (g): {foodItem["Protein (g)"]}</p>
            <p>Fibrer (g): {foodItem["Fibrer (g)"]}</p>
            <p>Fullkorn totalt (g): {foodItem["Fullkorn totalt (g)"]}</p>
            <p>Tillsatt socker (g): {foodItem["Tillsatt socker (g)"]}</p>

            <ParagraphWrapper> <LinkToTop/></ParagraphWrapper>

          </section>
        </StyledFoodItemArticle>
    </div>
    );
};