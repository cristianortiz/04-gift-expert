import React from "react";
import { GifGridContainer } from "./GifGrid.styles";
import GifGridItem from "./GifGridItem";

import useFetchGifs from "./hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  //custom hook to request API and state the response data
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading && <p>...Loading</p>}
      <GifGridContainer>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </GifGridContainer>
    </>
  );
};

export default GifGrid;
