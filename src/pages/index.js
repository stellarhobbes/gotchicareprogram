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
    title: "Grab an NFT",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nec cursus magna augue. ",
  },
  {
    title: "Vote to the DAO",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nec cursus magna augue. ",
  },
  {
    title: "Help building projects",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nec cursus magna augue. ",
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
        No prop at the moment • You'll be able to vote soon frens • No prop at the moment •
        You'll be able to vote soon frens • No prop at the moment • You'll be able to
        vote soon frens •&nbsp;
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

export const Head = () => <title>Home Page</title>;
