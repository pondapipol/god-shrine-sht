import styled from "styled-components";

export const Nav = () => {
  const Navbar = styled.div`
    width: 100%;
  `;

  const Navbody = styled.div`
    padding: 10px 0 0 0;
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    color: white;
    flex-direction: column;
  `;

  const Title = styled.h1`
    font-size: 4rem;
    margin: 0.7rem 0 0.4rem 0;
    padding: 0;
    font-family: "Palette Mosaic";
  `;

  const Name = styled.p`
    font-size: 20px;
    font-family: "Special Elite", cursive;
  `;

  return (
    <Navbar>
      <Navbody>
        <Title>Here's your GOD</Title>
        <Name></Name>
      </Navbody>
    </Navbar>
  );
};
