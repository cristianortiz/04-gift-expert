import React from "react";
import { GifGridItemContainer, ItemImage, ItemTitle } from "./GifGrid.styles";
//sended here already destructured {...img}
const GifGridItem = ({ title, url }) => {
  return (
    <GifGridItemContainer>
      <ItemImage src={url} alt={title} />
      <ItemTitle>{title}</ItemTitle>
    </GifGridItemContainer>
  );
};

export default GifGridItem;
