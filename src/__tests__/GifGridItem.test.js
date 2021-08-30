import React from "react";
import { render, screen } from "@testing-library/react";
import GifGridItem from "../components/GifGridItem";
import "@testing-library/jest-dom/extend-expect";

test("GifGridItem params shows correctly", () => {
  const title = "testing title";
  const url = "http://localhost:300/GiftExpertApp";
  render(<GifGridItem title={title} url={url} />);

  //  the title exists in the document
  expect(screen.getByText(title)).toBeInTheDocument();
  //get the image element
  const img = screen.getByRole("img");
  // the app title must be inside a p tag
  expect(screen.getByText(title).tagName).toBe("P");
  //the rendered image element must have a src and alt atributes
  expect(img).toHaveAttribute("src", url);
  expect(img).toHaveAttribute("alt", title);
});
