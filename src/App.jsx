import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import MyDataProvider from "./Components/Provider/provider";
import { createGlobalStyle } from "styled-components";
import Covid from "./Components/CovidStats/covid";
import Footer from "./Components/Footer/Footer";

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
      <MyDataProvider>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CovidStats" element={<Covid />} />
        </Routes>
      </MyDataProvider>
      <Footer />
    </Router>
  );
}

export default App;
