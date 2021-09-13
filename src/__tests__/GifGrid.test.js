import React from "react";
import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import GifGrid from "../components/GifGrid";
import useFetchGifs from "../components/hooks/useFetchGifs";

//to mock the custom hook call
jest.mock("../components/hooks/useFetchGifs");

describe("testing <GifGrid /> component", () => {
  beforeEach(() => {
    //the initial state of the custom hook call is simulated here
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const category = "goku";
    render(<GifGrid category={category} />);
  });

  test("the comp must be show Loading.. before request the API", () => {
    const loading = screen.getByText("...Loading");
    expect(loading.tagName).toBe("P");
  });

  test("should show the items when useFetchGifs is called", () => {
    const images = [
      {
        id: "ANCD",
        url: "https://localhost:3000/image.jpg",
        title: "any title will be useful",
      },
    ];

    //now call the mock custom hook whit fake values
    useFetchGifs.mockReturnValue({
      data: images,
      loading: false,
    });
    const category2 = "gundam";
    render(<GifGrid category={category2} />);
    const img = screen.getByRole("img");
    //the rendered image element must have a src and alt atributes
    expect(img).toHaveAttribute("alt", images.title);
  });
});
