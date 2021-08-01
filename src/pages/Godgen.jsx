import { Nav } from "../components/navbar";
import { God } from "../components/God";
import { Bless } from "../components/Bless";
import { GodWrap } from "../components/Godwrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Godgen = () => {
  const Button = styled.button`
    background-color: white;
    padding: 15px;
    margin: 15px;
    border-radius: 8px;
    font-weight: bold;
  `;
  return (
    <GodWrap>
      <Nav />
      <God />
      <Bless>
        <div>This god will bless you nothing</div>
      </Bless>
      <a
        href={
          "https://www.google.com/maps/place/%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%B5-Digital+Shrine/@13.6432661,100.4998946,15.5z/data=!4m5!3m4!1s0x0:0x3f5e863c4db4b2db!8m2!3d13.6437579!4d100.5018129"
        }
      >
        <Button>Shrine Location</Button>
      </a>
    </GodWrap>
  );
};
