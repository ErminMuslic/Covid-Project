import React, { useContext, useState } from 'react';
import { AllCountriesDataContext } from '../Provider/providerCountries'; // Correct import for context
import { Container, ContentWrapper, DataCard, InfoColumn, StatsColumn, PaginationWrapper } from './covidstyle'; // Import styled components
import Pagination from '@mui/material/Pagination';

const Covid = () => {
  const { data, loading, error } = useContext(AllCountriesDataContext); // Use context
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

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

  // Paginate the data
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
              <p><strong>Population:</strong> {stat.population}</p>
              <p><strong>New Deaths:</strong> {stat.deaths.new || "N/A"}</p>
              <p><strong>Total Deaths:</strong> {stat.deaths.total}</p>
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
