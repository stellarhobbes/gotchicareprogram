import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyles from "../global-styles";
import { motion } from "framer-motion";

const Wrapper = styled.div``;

const Button = styled(motion.button)`
  background-color: #221635;
  cursor: pointer;
  padding: 10px 20px;
  margin: 25px 0px;
  border: 0px;
  border-radius: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;
  :hover {
    background-color: #fa00e0;
  }
`;

const SimpleButton = (props) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Link to={props.buttonUrl} target="_blank">
        <Button whileHover={{ x: 5 }}>{props.children}</Button>
      </Link>
    </Wrapper>
  );
};

export default SimpleButton;
