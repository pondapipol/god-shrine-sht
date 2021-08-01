import styled from "styled-components";
import god from "../img/godex.png";
import img from "../img/img";
import { useState, useEffect } from "react";

export const God = () => {
  const [pic, setPic] = useState(img[Math.floor(Math.random() * 7)]);
  useEffect(() => {
    setTimeout(() => {
      setPic(img[Math.floor(Math.random() * 8)]);
    }, 500);
    setTimeout(() => {
      setPic(img[Math.floor(Math.random() * 8)]);
    }, 700);
    setTimeout(() => {
      setPic(img[Math.floor(Math.random() * 8)]);
    }, 900);
    setTimeout(() => {
      setPic(img[Math.floor(Math.random() * 8)]);
    }, 1100);
    setTimeout(() => {
      setPic(img[Math.floor(Math.random() * 8)]);
    }, 1300);
    setTimeout(() => {
      setPic(img[Math.floor(Math.random() * 8)]);
    }, 1500);
    setTimeout(() => {
      setPic(img[Math.floor(Math.random() * 8)]);
    }, 1700);
    setTimeout(() => {
      setPic(img[Math.floor(Math.random() * 8)]);
    }, 1900);
    console.log(`set`);
  }, []);

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
