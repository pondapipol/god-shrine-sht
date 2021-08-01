import { Nav } from "../components/navbar";
import { God } from "../components/God";
import { Bless } from "../components/Bless";
import { GodWrap } from "../components/Godwrap";
import styled from "styled-components";

export const Godgen = () => {
  const num = Math.floor(Math.random() * 9);
  const godname = [
    "Daphnia god of Healthy microbiomes",
    "Hypnos god of sleep and dream",
    "Egg boy child god of prosperity",
    "Diamond Elephant god of Preseverance",
    "Kubera Dwarf god of wealth",
    "Brahma God of creation",
    "Cuda god of productivity",
    "Hutte elephant god of cypertrunk",
    "White elephant god of love and longevity",
  ];
  const Button = styled.button`
    background-color: white;
    padding: 15px;
    margin: 15px;
    border-radius: 8px;
    font-weight: bold;
  `;

  const Name = styled.div`
    font-size: 25px;
    color: white;
    margin: 20px 0 0 0;
  `;
  return (
    <GodWrap>
      <Nav />
      <Name>{godname[num]}</Name>
      <God num={num} />
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
