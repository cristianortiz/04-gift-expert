//helper function to request the API returns the promise with the response data
const getGifAPI = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=frfwNmdBg63dS4yNjLpsoOISBv941KJZ`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  //returns the promise to resolve the gif collections retrieved
  return gifs;
};

export default getGifAPI;
