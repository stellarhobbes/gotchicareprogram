import * as React from "react";
import TextSlider from "../components/text-slider";
import Navbar from "../components/navbar";
import styled from "styled-components";
import Treasury from "../components/treasury";
import ContentBloc from "../components/content-bloc";
import Footer from "../components/footer";

import { motion } from "framer-motion";

const TitleBloc = styled.div``;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: 7.5vw;
  text-transform: uppercase;
  font-weight: 300;
  color: #221635;
  @media (max-width: 960px) {
    font-size: 52px;
  }
`;

const Italic = styled.span`
  font-weight: 600;
  font-style: italic;
`;
const Bold = styled.span`
  font-weight: 400;
`;

const ThreeColumns = styled.div`
  width: 90%;
  margin: auto;
  padding: 25px 0px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const InfoContent = [
  {
    title: "Get an NFT",
    text: "Get a piece of \"Alwaays odd or even\" FAKE Gotchis, or keep it preciously if you already have it.",
  },
  {
    title: "Vote in the DAO",
    text: "Each piece of FAKE Gotchis equals one voting power (1x GCP) in the DAO. The effect is cumulative.",
  },
  {
    title: "Help building projects",
    text: "Decide collectively how to use the treasury and create / fund caring projects on Web3.",
  },
];

const animationProperties = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -30 },
};

const IndexPage = () => {
  return (
    <main>
      <TextSlider>
        No prop at the moment • You'll be able to vote soon frens • No prop at
        the moment • You'll be able to vote soon frens • No prop at the moment •
        You'll be able to vote soon frens •&nbsp;
      </TextSlider>
      <Navbar />
      <TitleBloc>
        <Title
          initial="hidden"
          variants={animationProperties}
          animate="visible"
        >
          Gotchi <Italic>Care</Italic> <Bold>Program</Bold>
        </Title>
      </TitleBloc>
      <Treasury />
      <ThreeColumns>
        {InfoContent.map((content) => (
          <ContentBloc titleText={content.title} contentText={content.text} />
        ))}
      </ThreeColumns>
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Gotchi Care Program</title>;
