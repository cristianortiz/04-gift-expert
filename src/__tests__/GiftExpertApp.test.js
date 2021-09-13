import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import GiftExpertApp from "../components/GiftExpertApp";
import "@testing-library/jest-dom/extend-expect";

test("app loaded correctly at the first time", () => {
  render(<GiftExpertApp />);

  //the text exists in the document
  expect(screen.getByText("GiftExpert")).toBeInTheDocument();
  //the app title must be inside a h2 tag
  expect(screen.getByText("GiftExpert").tagName).toBe("H2");
});
