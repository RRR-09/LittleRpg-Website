import React from "react";
import PurchaseCard from "./PurchaseCard";
import {
  BackgroundCard,
  BackgroundContainer,
  Column,
  Row,
  RowCollection,
  RowMessage,
} from "./styles-grid";
const PurchaseListing = ({ layoutData }) => {
  const layout = layoutData[0];

  return (
    <RowCollection>
      {layout.map((row, rowIndex) => (
        <>
          {row?.message ? (
            <RowMessage key={`ProductRow_${rowIndex}`}>
              {row.message}
            </RowMessage>
          ) : (
            <Row key={`ProductRow_${rowIndex}`}>
              {row.items.map((itemObj, itemIndex) => (
                <Column size={row.items.length}>
                  <BackgroundContainer>
                    <BackgroundCard>
                      <PurchaseCard
                        itemObj={itemObj}
                        key={`Product_${rowIndex}_${itemIndex}`}
                      />
                    </BackgroundCard>
                  </BackgroundContainer>
                </Column>
              ))}
            </Row>
          )}
        </>
      ))}
    </RowCollection>
  );
};
export default PurchaseListing;
