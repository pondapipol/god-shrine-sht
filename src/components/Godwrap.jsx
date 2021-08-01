import styled from "styled-components";
import { useEffect, useState } from "react";

export const GodWrap = ({ children }) => {
  const Godwrap = styled.div`
    text-align: center;
    max-width: 100%;
    height: 100vh;
    background-position: center;
    background: rgb(221, 197, 208);
    background: radial-gradient(
      circle,
      rgba(
          ${Math.floor(Math.random() * 255 + 1)},
          ${Math.floor(Math.random() * 255 + 1)},
          ${Math.floor(Math.random() * 255 + 1)},
          1
        )
        ${Math.floor(Math.random() * 10 + 1)}%,
      rgba(
          ${Math.floor(Math.random() * 255 + 1)},
          ${Math.floor(Math.random() * 255 + 1)},
          ${Math.floor(Math.random() * 255 + 1)},
          1
        )
        ${Math.floor(Math.random() * 10 + 30)}%,
      rgba(
          ${Math.floor(Math.random() * 255 + 1)},
          ${Math.floor(Math.random() * 255 + 1)},
          ${Math.floor(Math.random() * 255 + 1)},
          1
        )
        ${Math.floor(Math.random() * 10 + 50)}%,
      rgba(
          ${Math.floor(Math.random() * 255 + 1)},
          ${Math.floor(Math.random() * 255 + 1)},
          ${Math.floor(Math.random() * 255 + 1)},
          1
        )
        ${Math.floor(Math.random() * 70 + 40)}%
    );
  `;
  return <Godwrap>{children}</Godwrap>;
};
