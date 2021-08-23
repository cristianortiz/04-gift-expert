import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import AddCategory from "../components/AddCategory";

const addCategory = jest.fn();

test("component must show correctly", () => {
  render(<AddCategory addCategory={addCategory} />);
});
