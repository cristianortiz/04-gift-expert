import getGifs from "../../components/helpers/getGifs";
import "@testing-library/jest-dom/extend-expect";

test("testing getGifs helper function", async () => {
  const category = "goku";
  const gifs = await getGifs(category);
  expect(gifs.length).toBe(10);
});
