import React, { useContext, useState } from 'react';
import { AllCountriesDataContext } from '../Provider/providerCountries';
import { Container, ContentWrapper, DataCard, InfoColumn, StatsColumn, PaginationWrapper,PopulationStyle,DeathStyle,TotalDeaths } from './covidstyle'; 
import Pagination from '@mui/material/Pagination';

const Covid = () => {
  const { data, loading, error } = useContext(AllCountriesDataContext); 
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; 

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data?.response || data.response.length === 0) {
    return <p>No data available</p>;
  }

  const paginatedData = data.response.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(data.response.length / itemsPerPage);

  return (
    <Container>
      <ContentWrapper>
        {paginatedData.map((stat, index) => (
          <DataCard key={index}>
            <InfoColumn>
              <p><strong>Country:</strong> {stat.country}</p>
              <p><strong>Continent:</strong> {stat.continent}</p>
            </InfoColumn>
            <StatsColumn>
              <p><strong>Population:</strong> <PopulationStyle>{stat.population || "0"}</PopulationStyle></p>
              <p><strong>New Deaths:</strong> <DeathStyle>{stat.deaths.new || "0"}</DeathStyle></p>
              <p><strong>Total Deaths:</strong> <TotalDeaths>{stat.deaths.total || "0"}</TotalDeaths></p>
            </StatsColumn>
          </DataCard>
        ))}
      </ContentWrapper>
      <PaginationWrapper spacing={2}>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </PaginationWrapper>
    </Container>
  );
};

export default Covid;
