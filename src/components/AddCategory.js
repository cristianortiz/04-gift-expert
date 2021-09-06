import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddCategorySearch, CategoryForm } from "./AddCategory.styles";

const AddCategory = ({ addCategory }) => {
  //local state to track the input form values entered by the user
  const [inputValue, setInputValue] = useState("");

  //function to process the onChange event of form iunput
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("handleInputChange called in");
  };
  //handle form submit event when user press enter in the input
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      addCategory(inputValue);
      setInputValue("");
    }
  };
  return (
    <CategoryForm onSubmit={handleSubmit}>
      <AddCategorySearch
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </CategoryForm>
  );
};
//using propTypes for documenting components
AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default AddCategory;
