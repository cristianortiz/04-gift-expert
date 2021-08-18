import styled from "@emotion/styled";
//this is a card div
export const GifGridContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const GifGridItemContainer = styled.div`
  position: relative;
  height: auto;
  align-content: center;
  border: 1px solid lightgray;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 10px 10px 0;
`;
export const ItemImage = styled.img`
  //width: 400px;
  max-height: 170px;
`;
export const ItemTitle = styled.p`
  padding: 20px 5px;
  text-align: center;
`;
