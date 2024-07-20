import React, { useContext } from 'react';
import { MyDataContext } from '../Provider/provider';
import { Link } from 'react-router-dom';
import { Image, Container, StatsWrapper, StatsCard, CardTitle, CardValue, LinkCard, LinkTitle } from './homestyle.js';
import corona from './Images/CoronaMap.png';

export default function Home() {
  const { data, loading, error } = useContext(MyDataContext);

  const statistics = data?.response[0];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  if (!statistics) {
    return <p>No data available</p>;
  }

  return (
    <Container>
      <Image src={corona} alt="Corona" />
      <h1 style={{color:"#880808"}}>World Stats</h1>
      <StatsWrapper>
        <StatsCard>
          <CardTitle>Recovered</CardTitle>
          <CardValue color="green">{statistics.cases.recovered}</CardValue>
        </StatsCard>
        <StatsCard>
          <CardTitle>Deaths</CardTitle>
          <CardValue color="red">{statistics.deaths.total}</CardValue>
        </StatsCard>
        <StatsCard>
          <CardTitle>Active Cases</CardTitle>
          <CardValue color="blue">{statistics.cases.active}</CardValue>
        </StatsCard>
        <LinkCard>
          <LinkTitle>
            <Link to="/Country">Country Status</Link>
          </LinkTitle>
        </LinkCard>
      </StatsWrapper>
    </Container>
  );
}
