import React from "react";
import "@testing-library/dom";
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

test("should not call addCategory if input text  < 3 characters", () => {
  const input = screen.getByRole("textbox");
  const inputValue = "go";
  userEvent.type(input, inputValue);
  userEvent.keyboard("{Enter}");
  expect(addCategory).not.toHaveBeenCalled();
});

test("should call addCategory function and clean the text input", () => {
  //get the input text an put a value on it
  const input = screen.getByRole("textbox");
  const inputValue = "gokucito";
  userEvent.type(input, inputValue);
  //simulate enter key press
  userEvent.keyboard("{Enter}");
  //check if the addCategory function is already called
  expect(addCategory).toHaveBeenCalled();
  //check if the input was set to " " in setInputValue line 19
  expect(input).toHaveValue("");
});
