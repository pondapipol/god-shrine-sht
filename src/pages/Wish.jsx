import styled from "styled-components";
import { Wishtext } from "../components/Wishtext";
import { Link } from "react-router-dom";

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 20px 0 0 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: 0.2s all ease-in-out;
  background: #314ba8;
  color: white;
  font-family: "Special Elite", cursive;
  &:hover {
    background: #20316e;
  }
`;

export const Wish = () => {
  const WishWrap = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `;

  const Title = styled.h1`
    box-sizing: border-box;
    color: white;
    margin: 0;
    padding: 20px;
    color: #314ba8;
    font-size: 3rem;
    font-family: "Palette Mosaic";
  `;
  const Wrap = styled.div`
    height: 100vh;
    background: #f0f2f0; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to top,
      #000c40,
      #f0f2f0
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to top,
      #000c40,
      #f0f2f0
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `;

  const Textwrap = styled.div`
    width: 100%;
  `;
  const ButtonWrap = styled.div`
    width: 100%;
  `;

  const SecWrap = styled.div`
    background: white;
    width: 40%;
    padding: 40px;
    border-radius: 25px;
    margin: auto;
  `;
  return (
    <Wrap>
      <WishWrap>
        <Title>Tell us your wish</Title>
        <SecWrap>
          <Textwrap>
            <Wishtext />
          </Textwrap>
          <ButtonWrap>
            <Link to="/godgen">
              <Button>Send wish to the god</Button>
            </Link>
          </ButtonWrap>
        </SecWrap>
      </WishWrap>
    </Wrap>
  );
};
