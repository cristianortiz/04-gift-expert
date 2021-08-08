import styled from "@emotion/styled";
//this is a card div
export const GifGridContainer = styled.div`
  margin: 20px;
  display: grid;
  position: relative;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
export const GifGridItemContainer = styled.div`
  align-content: center;
  border: 1px solid lightgray;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 10px 10px 0;
`;
export const ItemImage = styled.img`
  /*  width: 400px;
  height: 300px; */
`;
export const ItemTitle = styled.p`
  padding: 5px;
  text-align: center;
`;
