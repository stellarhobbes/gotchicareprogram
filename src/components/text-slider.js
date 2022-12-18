import React from "react";
import styled from "styled-components";
import GlobalStyles from "../global-styles";
import Marquee from "react-fast-marquee";

const Wrapper = styled.div`
  background-color: #fa00e0;
  padding: 10px 0px;
`;

const SlideText = styled.p`
  text-transform: uppercase;
  font-family: "Montserrat";
  color: white;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
`;

const TextSlider = (props) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Marquee gradientColor="transparent" speed="10" direction="left">
        <SlideText>
            {props.children}
        </SlideText>
      </Marquee>
    </Wrapper>
  );
};

export default TextSlider;
