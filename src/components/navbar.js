import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyles from "../global-styles";

import GCPLogo from "../images/gcp-logo.png";
import SimpleButton from "./button";

const Main = styled.div`
`;
const Wrapper = styled.section`
  padding: 15px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    padding: 20px 0px;
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 75px;
`;

const LinksBloc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SimpleLink = styled(Link)`
  cursor: pointer;
  margin: 0px 30px 0px 0px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #221635;
  :hover {
    color: #fa00e0;
    transition: 0.2s;
  }
  @media (max-width: 960px) {
    font-size: 14px;
    padding: 0px 10px 0px 0px;
    flex-direction: column;
  }
`;

const Navbar = () => {
  return (
    <Main>
      <GlobalStyles />
      <Wrapper>
        <Logo src={GCPLogo}></Logo>
        <LinksBloc>
          <SimpleLink to="https://www.fakegotchis.com" target="_blank">FAKE Shop</SimpleLink>
          <SimpleLink>DAO Forum</SimpleLink>
          <SimpleButton buttonUrl="https://snapshot.org/#/gotchicareprogram.eth">
            Snapshot
          </SimpleButton>
        </LinksBloc>
      </Wrapper>
    </Main>
  );
};

export default Navbar;
