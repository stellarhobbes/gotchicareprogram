import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyles from "../global-styles";
import { motion } from "framer-motion";

import CoinIcon from "../images/coin.png";
import Butterfly from "../images/gotchi-butterfly.png";
import Sword from "../images/gotchi-sword.png";

const TreasurySection = styled.section`
  padding: 50px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftImage = styled(motion.img)`
  height: 400px;
  position: absolute;
  left: 100px;
  @media (max-width: 960px) {
    height: 300px;
    left: -50px;
  }
  @media (max-width: 680px) {
    height: 200px;
    left: -100px;
  }
`;
const RightImage = styled(motion.img)`
  height: 400px;
  position: absolute;
  right: 100px;
  @media (max-width: 960px) {
    height: 300px;
    right: -50px;
  }
  @media (max-width: 680px) {
    height: 200px;
    right: -100px;
  }
`;
const TreasuryBloc = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 75px;
  border-radius: 20px;
`;

const Icon = styled(motion.img)`
  width: 40px;
  margin-bottom: 10px;
`;

const Sum = styled.p`
  color: #221635;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 36px;
  line-height: 164.6%;
  text-align: center;
`;

const SubSum = styled.p`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #e4a62e;
`;

const bounceTransition = {
  y: {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
  },
};

const Treasury = () => {
  return (
    <TreasurySection>
      <GlobalStyles />
      <LeftImage
        src={Butterfly}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            x: 30,
            transition: { duration: 1, delay: 0.5 },
          },
          hidden: { opacity: 0, x: -30 },
        }}
        animate="visible"
      ></LeftImage>
      <Link to="https://polygonscan.com/address/0x9ebC7894FA74A6b7E99B22aEF9e16A51E91d07a3" target="_blank">
        <TreasuryBloc>
          <Icon
            src={CoinIcon}
            transition={bounceTransition}
            animate={{ y: ["7%", "-7%"] }}
          ></Icon>
          <Sum>
            1.000 <span style={{ fontWeight: "500" }}>$GHST</span>
          </Sum>
          <SubSum>treasury</SubSum>
        </TreasuryBloc>
      </Link>
      <RightImage
        src={Sword}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            x: -30,
            transition: { duration: 1, delay: 1 },
          },
          hidden: { opacity: 0, x: 30 },
        }}
        animate="visible"
      ></RightImage>
    </TreasurySection>
  );
};

export default Treasury;
