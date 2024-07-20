import React, { useState, useEffect } from 'react';
import { Container, InputWrapper, MainContent, Section, BlackBox, BoxContainer, WideBlackBox } from './CountryStyle';
import { TextField, Autocomplete } from '@mui/material';
import fetchData from '../request/request'; 

const CountryPage = () => {
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await fetchData('f026b9f55amsha967c914610b5bep19604ajsn605d93c21fcf', 'https://covid-193.p.rapidapi.com/countries');
        if (Array.isArray(result.response)) {
   
          const countryOptions = result.response.map(countryName => ({ name: countryName }));
          setCountries(countryOptions);
        } else {
          console.error('Expected an array but got:', result);
          setCountries([]);
        }
      } catch (err) {
        console.error('Error fetching countries:', err);
        setCountries([]);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (country) {
      const fetchDataFromApi = async () => {
        setLoading(true);
        try {
          const apiKey = 'f026b9f55amsha967c914610b5bep19604ajsn605d93c21fcf';
          const apiUrl = date 
            ? `https://covid-193.p.rapidapi.com/history?country=${country}&day=${date}`
            : `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
          const result = await fetchData(apiKey, apiUrl);

          if (result && result.response && result.response.length > 0) {
    
            setData(date ? result.response[0] : result.response[0]);
          } else {
            setData(null);
          }
          setError(null);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchDataFromApi();
    }
  }, [country, date]);

  return (
    <Container backgroundImage="https://northernvirginiamag.com/wp-content/uploads/2020/06/people-with-masks.jpg">
      <InputWrapper>
        <Autocomplete
          options={countries} 
          getOptionLabel={(option) => option.name} 
          renderInput={(params) => <TextField {...params} label="Choose a country" variant="outlined" />}
          onChange={(event, newValue) => setCountry(newValue ? newValue.name : '')}
          style={{ width: '30%' }}
        />
        <TextField
          label="Input Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          onChange={(event) => setDate(event.target.value)}
          style={{ width: '30%' }}
        />
      </InputWrapper>
      <MainContent>
        <Section>
          {loading ? <p>Loading...</p> : error ? <p>Error: {error.message}</p> : (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
                <img
                  src={`https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/${country.toLowerCase()}.svg`}
                  alt={country}
                  style={{ width: '100px', opacity: 0.75 }}
                />
                <h2 style={{ fontSize: '24px', color: '#4A4A4A' }}>{country}</h2>
              </div>
              <BoxContainer>
                <BlackBox>
                  <h4 style={{ fontSize: '20px', color: '#6D28D9' }}>{data?.cases?.new || 'no-data'}</h4>
                  <p>New Cases</p>
                </BlackBox>
                <BlackBox>
                  <h4 style={{ fontSize: '20px', color: '#EF4444' }}>{data?.deaths?.new || 'no-data'}</h4>
                  <p>New Deaths</p>
                </BlackBox>
                <BlackBox>
                  <h4 style={{ fontSize: '20px', color: '#10B981' }}>{data?.cases?.recovered || 'no-data'}</h4>
                  <p>New Recovered</p>
                </BlackBox>
              </BoxContainer>
              <WideBlackBox style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '20px', color: '#9CA3AF' }}>{data?.cases?.active || 'no-data'}</h4>
                <p>Total Active</p>
              </WideBlackBox>
            </div>
          )}
        </Section>
      </MainContent>
    </Container>
  );
};

export default CountryPage;
