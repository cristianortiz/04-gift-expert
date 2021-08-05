import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";
import {
  TopBar,
  TopBarTitleContainer,
  TopBarTitle,
  MainContent,
  GifList,
} from "./GiftExpert.styles";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Chayanne"]);
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
        <GifList>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </GifList>
      </MainContent>
    </>
  );
};

export default GiftExpertApp;
