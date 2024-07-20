import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100vw;
  height: 20vh;
`;

export const StatsCard = styled.div`
  text-align: center;
  width: 20%;
  height: 80%;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  &:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: bold; 
`;

export const CardValue = styled.p`
  font-size: 25px;
  color: ${({ color }) => color || 'black'};
  font-weight: bold;
`;

export const LinkCard = styled.div`
  text-align: center;
  width: 20%;
  height: 80%;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center; 
  &:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }
`;

export const LinkTitle = styled.p`
  margin: 0;
  font-weight: bold; 
  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 28px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
