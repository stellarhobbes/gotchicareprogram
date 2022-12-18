import React from "react";
import styled from "styled-components";
import GlobalStyles from "../global-styles";

import Puce from "../images/puce-magenta.png";

const Wrapper = styled.div`
  background-color: #221635;
  padding: 35px 35px;
  border-radius: 20px;
`;
const Icon = styled.img`
  height: 30px;
`;
const Title = styled.h2``;
const Content = styled.p`
  color: white;
`;

const ContentBloc = (props) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Icon src={Puce} alt="Image d'un cristal magenta"></Icon>
      <Title>{props.titleText}</Title>
      <Content>{props.contentText}</Content>
    </Wrapper>
  );
};

export default ContentBloc;
