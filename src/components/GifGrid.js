import React from "react";

const GifGrid = ({ category }) => {
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
  };

  getGifAPI();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;
