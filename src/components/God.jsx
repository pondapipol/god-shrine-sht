import styled from "styled-components";
import god from "../img/godex.png";
import img from "../img/img";
import { useState, useEffect } from "react";

export const God = ({ num }) => {
  const [pic, setPic] = useState(img[num]);

  const ImgWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 0.9vw;
  `;

  const Img = styled.div`
    background-image: url(${pic});
    background-color: white;
    background-size: auto 100%;
    background-repeat: no-repeat;
    height: 30em;
    width: 30em;
    margin: 20px;
    border-radius: 300px;
  `;

  return (
    <ImgWrap>
      <Img />
    </ImgWrap>
  );
};
