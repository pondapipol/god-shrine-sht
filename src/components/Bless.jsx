import styled from "styled-components";
export const Bless = ({ children }) => {
  const Wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px 0 0 0;
    color: white;
    font-family: "Special Elite", cursive;
    font-size: 1.3rem;
  `;
  return <Wrap>{children}</Wrap>;
};
