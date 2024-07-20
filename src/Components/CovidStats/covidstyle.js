import styled from 'styled-components';
import { Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
`;

export const DataCard = styled.div`
  border: 1px solid orange;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:hover {
    transition: 0.5s;
    background-color: orange;
    border: 1px solid black;
  }
`;

export const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const StatsColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const PaginationWrapper = styled(Stack)`
  margin-top: 20px;
  width: 100%;
  max-width: 1000px;
`;
export const DeathStyle = styled.div`
display: flex;
justify-content: center;
  color: blue;
  border: 1px double blue;
  border-radius: 8px;
`
export const PopulationStyle = styled.div`
display: flex;
justify-content: center;
  color: green;
  border: 1px double green;
  border-radius: 8px;
`
export const TotalDeaths = styled.div`
display: flex;
justify-content: center;
  color: red;
  border: 1px double red;
  border-radius: 8px;
`