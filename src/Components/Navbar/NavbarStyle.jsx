import styled from 'styled-components';
import covidlogo from "./Images/covidh.png";

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: white;
  align-items: center;
`;

const LogoLink = styled.a`
  display: inline-block;
  cursor: pointer;
  width: 50%;
  display: flex;
  justify-content: start;

  img {
    height: 60px;
    width: auto;
  }
`;

const LinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px; /* Adjust padding as needed */
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

export const NavbarStyle = () => {
  return (
    <NavbarContainer>
      <LogoLink href="/">
        <img src={covidlogo} alt="Logo" />
      </LogoLink>
      <LinksContainer>
        <LinkItem href="/CovidStats">Covid</LinkItem>
        <LinkItem href="/Country">Country</LinkItem>
        <LinkItem href="/About Us">About Us</LinkItem>
      </LinksContainer>
    </NavbarContainer>
  );
};
