import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import GifGridItem from "../components/GifGridItem";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

test("GifGridItem params shows correctly", () => {
  const title = "testing title";
  const url = "http://localhost:300/GiftExpertApp";
  render(<GifGridItem title={title} url={url} />);

  //   //the text exists in the document
  expect(screen.getByText(title)).toBeInTheDocument();
  //   //the app title must be inside a p tag
  expect(screen.getByText(title).tagName).toBe("P");
  const img = screen.getByTestId("item-img");
  //the app title must be inside a h2 tag
  expect(img.tagName).toBe("IMG");
});
