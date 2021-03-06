import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";
import {
  TopBar,
  TopBarTitleContainer,
  TopBarTitle,
  MainContent,
} from "./GiftExpert.styles";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Chayanne"]);
  //function to add a category from another component
  const addCategory = (value) => {
    //value first add new categorys retrieved in first place  in render
    setCategories([value, ...categories]);
  };

  return (
    <>
      <TopBar>
        <TopBarTitleContainer>
          <TopBarTitle>GiftExpert</TopBarTitle>
        </TopBarTitleContainer>
        <AddCategory addCategory={addCategory} />
      </TopBar>
      <MainContent>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </MainContent>
    </>
  );
};

export default GiftExpertApp;
