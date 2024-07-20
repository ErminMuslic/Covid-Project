import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import MyDataProvider from "./Components/Provider/provider";
import AllCountriesDataProvider from "./Components/Provider/providerCountries"; 
import { createGlobalStyle } from "styled-components";
import Covid from "./Components/CovidStats/covid";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About Us/About";
import Country from "./Components/CountryStats/Country";
import AllCountriesDataProviderDay from "./Components/Provider/providerCountriesDate";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    background-color: white;
    padding: 0;
    color:black;
    overflow-x: hidden;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <Router>
      <AllCountriesDataProviderDay>
      <AllCountriesDataProvider>
        <MyDataProvider>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CovidStats" element={<Covid />} />
            <Route path="/Country" element={<Country />} />
            <Route path="/About Us" element={<About />} />
          </Routes>
          <Footer />
        </MyDataProvider>
      </AllCountriesDataProvider>
      </AllCountriesDataProviderDay>
    </Router>
  );
}

export default App;
