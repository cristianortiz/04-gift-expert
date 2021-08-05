import React, { useState } from "react";
import AddCategory from "./AddCategory";
import {
  TopBar,
  TopBarTitleContainer,
  TopBarTitle,
  MainContent,
} from "./GiftExpert.styles";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Love", "Gundam", "Chayanne"]);
  //function to add a category from another component
  const addCategory = (value) => {
    setCategories([...categories, value]);
  };

  return (
    <>
      <TopBar>
        <TopBarTitleContainer>
          <TopBarTitle>GifExpert</TopBarTitle>
        </TopBarTitleContainer>
        <AddCategory addCategory={addCategory} />
      </TopBar>
      <MainContent>
        <ul>
          {categories.map((category) => {
            return <li key={category}>{category}</li>;
          })}
        </ul>
      </MainContent>
    </>
  );
};

export default GiftExpertApp;
