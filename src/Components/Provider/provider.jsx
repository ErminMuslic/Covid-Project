import React, { createContext, useState, useEffect } from "react";
import fetchData from "../request/request";

export const MyDataContext = createContext();

const MyDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "f026b9f55amsha967c914610b5bep19604ajsn605d93c21fcf";
  const apiUrl = "https://covid-193.p.rapidapi.com/statistics?country=all";

  const fetchDataFromApi = async () => {
    try {
      const result = await fetchData(apiKey, apiUrl);
      setData(result);
      console.log("Data fetched successfully");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, [apiKey, apiUrl]);

  return (
    <MyDataContext.Provider value={{ data, loading, error, fetchData: fetchDataFromApi }}>
      {children}
    </MyDataContext.Provider>
  );
};

export default MyDataProvider;
