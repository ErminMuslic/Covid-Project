import React, { useContext, useEffect } from "react";
import { MyDataContext } from "../Provider/provider";
import { Link } from "react-router-dom";
import corona from "./Images/CoronaMap.png";

export default function Home() {
  const { data, loading, error, fetchData } = useContext(MyDataContext);

  // Extract statistics from the response
  const statistics = data?.response[0];


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Check if statistics are available
  if (!statistics) {
    return <p>No data available</p>;
  }

  return (
    <>
      <img style={{ width: "100%" }} src={corona} alt="Corona" />
      <div style={{ textAlign: "center" }}>
      <h1>World Stats</h1>
      <div style={{ flexDirection: "row",display: "flex", justifyContent: "space-evenly",width:"100vw",height:"20vh" }}>
      <div style={{ textAlign: "center",width:"20%",height:"80%",backgroundColor: "white",border:"1px solid black",borderRadius:"10px" }}>
        <p>Recovered</p>
        <p style={{ fontSize: "25px",color:"green" }}>{statistics.cases.recovered}</p>
      </div>
        <div style={{ textAlign: "center",width:"20%",height:"80%",backgroundColor: "white",border:"1px solid black",borderRadius:"10px" }}>
          <p>Deaths</p>
          <p style={{ fontSize: "25px",color:"red" }}>{statistics.deaths.total}</p>

        </div>
        <div style={{ textAlign: "center",width:"20%",height:"80%",backgroundColor: "white",border:"1px solid black",borderRadius:"10px" }}>
          <p>Active Cases</p>
          <p style={{ fontSize: "25px",color:"blue" }}>{statistics.cases.active}</p>
        </div>
        <div style={{ textAlign: "center",width:"20%",height:"80%",backgroundColor: "white",border:"1px solid black",borderRadius:"10px" }}>
          <h1><a href="">Country Status</a></h1>
        </div>
      </div>
      </div>
    </>
  );
}
