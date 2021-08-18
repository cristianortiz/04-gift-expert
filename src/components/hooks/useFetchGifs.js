import { useEffect, useState } from "react";
import getGifAPI from "../helpers/getGifs";
//custom hook to request API and state the response data
const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifAPI(category).then((images) => {
      setState({
        data: images,
        loading: false,
      });
    });
  }, [category]);

  return state;
};

export default useFetchGifs;
