// FooterStyle.jsx
import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px;

  svg {
    transition: transform 0.3s ease;
    cursor: pointer;
    color: #333;
  }

  svg:hover {
  transition: 0.5s;
  color: red;
    transform: scale(1.2);
  }
`;
const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

const LinkItem = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: black;
  font-size: 24px;
  
  &:hover {
  color: red;
  transition: 0.5s;
  font-size: 28px;
    text-decoration: none;
  }
`;

export const FooterStyle = () => {
  return (
    <>
    <IconWrapper>
      <Facebook fontSize="large" />
      <Instagram fontSize="large" />
      <Twitter fontSize="large" />
    </IconWrapper>
    <LinksContainer>
        <LinkItem href="/CovidStats">Covid</LinkItem>
        <LinkItem href="/Country">Country</LinkItem>
        <LinkItem href="/About Us">About Us</LinkItem>
      </LinksContainer>
      <p style={{ textAlign: "center" }}>© Covid 19 Coorporation</p>
    </>
  );
};
