import styled from "styled-components";
import { useState } from "react";
const WishText = styled.textarea`
  padding: 20px;
  width: 90%;
  border: 1.5px solid lightgray;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
  font-size: 20px;
  font-family: "Special Elite", cursive;
`;
export const Wishtext = () => {
  const [text, setText] = useState("");

  function handleValue(e) {
    setText(e.target.value);
  }

  return (
    <WishText
      value={text}
      onChange={handleValue}
      placeholder="type your wish here"
    />
  );
};
