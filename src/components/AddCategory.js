import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddCategorySearch, CategoryForm } from "./AddCategory.styles";

const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    addCategory(inputValue);
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
