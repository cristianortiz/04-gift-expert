import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import AddCategory from "../components/AddCategory";
import userEvent from "@testing-library/user-event";

const addCategory = jest.fn();
//to avoid call render function in every single test
beforeEach(() => {
  render(<AddCategory addCategory={addCategory} />);
});

test("Add category component must show a text input", () => {
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("the text input must change if user enters a text", () => {
  //getByrole input form, also works for textArea
  const input = screen.getByRole("textbox");
  const inputValue = "goku";
  //the user enters a new value in text input
  userEvent.type(input, inputValue);
  //check if the input have the new value entered by the user
  expect(screen.getByRole("textbox")).toHaveValue(inputValue);
});
