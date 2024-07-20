import React, { createContext, useState, useEffect } from "react";
import fetchData from "../request/request"; // Import your fetch function

export const AllCountriesDataContextDay = createContext();

const AllCountriesDataProviderDay = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "f026b9f55amsha967c914610b5bep19604ajsn605d93c21fcf";
  const apiUrl = "https://covid-193.p.rapidapi.com/history?country=china&amp;day=2020-03-21";

  const fetchAllCountriesData = async () => {
    try {
      const result = await fetchData(apiKey, apiUrl);
      setData(result);
      console.log("All countries data fetched successfully");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCountriesData();
  }, [apiKey, apiUrl]);

  return (
    <AllCountriesDataContextDay.Provider value={{ data, loading, error }}>
      {children}
    </AllCountriesDataContextDay.Provider>
  );
};

export default AllCountriesDataProviderDay;
