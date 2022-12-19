import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyles from "../global-styles";

const Main = styled.div`
  background-color: #221635;
  padding: 20px 0px;
`;

const Text = styled.p`
  text-align: center;
  color: white;
`;

const Pink = styled.span`
  color: #fa00e0;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <Main>
      <GlobalStyles />
      <Link to="https://twitter.com/stellarhobbes" target="_blank">
      <Text>
        made with 💜 by <Pink>stellarhobbes</Pink>
      </Text>
      </Link>
    </Main>
  );
};

export default Footer;
