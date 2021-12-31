import styled from "styled-components";
import img_ender_chest_open from "../../assets/ender_chest_open.png";
import img_heroes_aquatic from "../../assets/heroes_aquatic.png";
import img_heroes_in_combat from "../../assets/heroes_in_combat.png";

export const Pictures = {
  ender_chest_open: img_ender_chest_open,
  heroes_in_combat: img_heroes_in_combat,
  heroes_aquatic: img_heroes_aquatic,
};

const widths = {
  1: 12,
  2: 6,
  3: 4,
};

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
const RowSpacing = 36;

export const RowCollection = styled.div`
  &:first-child div${Row} {
    margin-top: ${RowSpacing}px;
  }
  &:not(:first-child) div${Row} {
    margin-top: ${RowSpacing / 2}px;
  }
  &:last-child div${Row} {
    margin-bottom: ${RowSpacing}px;
  }
  &:not(:last-child) div${Row} {
    margin-bottom: ${RowSpacing / 2}px;
  }
`;
export const BackgroundContainer = styled.div``;
export const Column = styled.div`
  grid-column: span ${(props) => widths[props.size] || 12};
  justify-self: stretch;

  &:not(:first-child) div${BackgroundContainer} {
    padding-left: 12px;
  }
  &:not(:last-child) div${BackgroundContainer} {
    padding-right: 12px;
  }
`;

export const BackgroundCard = styled.div`
  border: 2px solid #333533;
  background-color: rgba(51, 53, 51, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  /*NoSelect*/
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const ProductContainer = styled.div`
  font-size: 30px;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  height: auto;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const ProductContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProductImage = styled.img`
  height: 200px;
`;

export const ProductNameText = styled.div`
  color: ${(props) => props.itemColor || "grey"};
  font-weight: 700;
  white-space: nowrap;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  text-shadow: 2px 2px 1px #000000;
`;

export const ProductPriceText = styled.div`
  color: #0ea71c;
  font-weight: 700;
  white-space: nowrap;
  text-shadow: 2px 2px 1px #000000;
  text-transform: uppercase;
`;
export const StoreButtonContainer = styled.div`
  margin-bottom: 24px;
  & a {
    text-decoration: none !important;
  }
`;
export const StoreButton = styled.div`
  color: white;
  background-color: ${(props) =>
    (props?.backgroundColor ?? false) || "#0fa71e"};
  padding: 0.5em 1em;
  font-size: 2.5em;
  border: 1px solid black;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
`;
export const CancelButton = styled.div`
  color: white;
  background-color: ${(props) =>
    (props?.backgroundColor ?? false) || "#0fa71e"};
  padding: 0em 0em;
  font-size: 2.5em;
  border: 1px solid black;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  display: flexbox;
  margin: 0px 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 11vh;
`;
export const PurchaseButtonInput = styled.button`
  color: white;
  background-color: ${(props) =>
    (props?.backgroundColor ?? false) || "#0fa71e"};
  padding: 0em 0em;
  font-size: 2.5em;
  border: 1px solid black;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  display: block;
  margin: 0px 0px;
  width: 100%;
  height: 11vh;
`;

export const RowMessage = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1em;
  font-size: 21px;
  color: #fff;
  text-shadow: 2px 2px 4px #000000;
  font-family: "Lato", sans-serif;
  font-weight: bold;
`;

export const DescriptorBody = styled.div`
  border: 2px solid #333533;
  font-size: 21px;
  width: 100%;
  background-color: rgba(51, 53, 51, 0.7);
  padding: 15px;
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: 12px;
  margin-bottom: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & p {
    margin-top: 0px;
    font-size: 13px;
    color: #fff;
    text-shadow: 0px 0px 0px #000000;
    margin-bottom: 2em;
  }
  & div {
    padding-top: 3em;
  }
  & div:last-of-type {
    padding-bottom: 3em;
  }
  & h2 {
    font-size: 1.7em;
  }
  & h3 {
    font-size: 1.75em;
  }
  & h5 {
    font-size: 1em;
    font-weight: 500;
  }
  & h3,
  h5 {
    margin-top: 0px;
    margin-bottom: 0.25em;
  }
`;
export const StoreHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1vh;
  & h1, & h2 {
    margin: 0.5vh 0;
    text-shadow: 2px 2px 4px #000000;
    color: #eee;
    font-family: "Lato", sans-serif;
    font-weight: bold;
  }
  & h1 {
    font-size: 3em;
  }
  & h2 {
    font-size: 1.75em;
  }
}`;
export const StoreNote = styled.div`
  margin-bottom: 24px;
  & input {
    width: 100%; 
    font-size: 24px;
  }
}`;
