import React, { useEffect, useState } from "react";
import { GifGridContainer } from "./GifGrid.styles";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifAPI();
  }, []);

  const getGifAPI = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=frfwNmdBg63dS4yNjLpsoOISBv941KJZ";
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

  return (
    <GifGridContainer>
      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </GifGridContainer>
  );
};

export default GifGrid;
