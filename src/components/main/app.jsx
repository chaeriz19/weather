import React, { useEffect, useState } from "react";
import "../main/home.css";
import Loading from "../loading.jsx";

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY =
    "https://api.weatherapi.com/v1/current.json?key=2a0cb2d64586439386c75804230906&q=";

  async function weatherdata(country) {
    setLoading(true);
    try {
        let response = await fetch(API_KEY + country);
        const data = await response.json();
        setData(data);
    } catch (e) {
        console.error(e);
    }finally {
        setInterval(() => {
        setLoading(false);
          
        }, 500);
    }
  }

  function handlePopular(i) {
    setInput(i);
    weatherdata(i);
  }

  let LOCATION_NAME = "";
  let LOCATION_TEMP_C = "";
  let LOCATION_IMG = "";
  let LOCATION_CONDITION_TEXT = "";
  if (data && data.location && data.current) {
    LOCATION_NAME = data.location.name;
    LOCATION_TEMP_C = data.current.temp_c;
    LOCATION_IMG = data.current.condition.icon;
    LOCATION_CONDITION_TEXT = data.current.condition.text;
  }

  return (
    <div className="main">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              weatherdata(input);
            }}
          >
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Search a city ..."
              type="text"
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
          {data && (
            <div>
              <div className="data">
                <div></div>
                <img src={LOCATION_IMG} alt="Weather icon" />
                <p>{LOCATION_CONDITION_TEXT}</p>
                <h1>{LOCATION_NAME}</h1>
                <h2>{LOCATION_TEMP_C} °C</h2>
              </div>
              <div className="popular">
                <p>Or, choose a popular city</p>
                <h1>Popular</h1>
                <button onClick={() => handlePopular("zwolle")}>Zwolle</button>
                <button onClick={() => handlePopular("utrecht")}>Utrecht</button>
                <button onClick={() => handlePopular("amsterdam")}>Amsterdam</button>
              </div>
            </div>
          )}
          {!data && (
            <div className="popular">
              <p>Or, choose a popular city</p>
              <h1>Popular</h1>

              <button onClick={() => handlePopular("zwolle")}>Zwolle</button>
              <button onClick={() => handlePopular("utrecht")}>Utrecht</button>
              <button onClick={() => handlePopular("amsterdam")}>Amsterdam</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
