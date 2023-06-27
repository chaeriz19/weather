import React, { Component, useEffect, useState } from "react";
import Loading from "../loading";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Countries() {
  const API = "https://restcountries.com/v3.1/name/";
  const [loading, setLoading] = useState(false);
  const [countrydata, setcountryData] = useState({});
  useEffect(() => {
    data("netherlands");
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 500);
  }, []);

  async function data(input) {
    if (!input) return;
    if (input == "") return;
    let response = await fetch(API + input);
    let datajson = await response.json();
    setcountryData(datajson[0]);
  }

  const countries = [
    { label: "China" },
    { label: "India" },
    { label: "United States" },
    { label: "Indonesia" },
    { label: "Pakistan" },
    { label: "Brazil" },
    { label: "Nigeria" },
    { label: "Bangladesh" },
    { label: "Russia" },
    { label: "Mexico" },
    { label: "Japan" },
    { label: "Ethiopia" },
    { label: "Philippines" },
    { label: "Egypt" },
    { label: "Vietnam" },
    { label: "DR Congo" },
    { label: "Turkey" },
    { label: "Iran" },
    { label: "Germany" },
    { label: "Thailand" },
    { label: "United Kingdom" },
    { label: "France" },
    { label: "Italy" },
    { label: "Tanzania" },
    { label: "South Africa" },
    { label: "Myanmar" },
    { label: "Kenya" },
    { label: "South Korea" },
    { label: "Colombia" },
    { label: "Spain" },
    { label: "Uganda" },
    { label: "Argentina" },
    { label: "Algeria" },
    { label: "Sudan" },
    { label: "Ukraine" },
    { label: "Iraq" },
    { label: "Afghanistan" },
    { label: "Poland" },
    { label: "Canada" },
    { label: "Morocco" },
    { label: "Saudi Arabia" },
    { label: "Uzbekistan" },
    { label: "Peru" },
    { label: "Angola" },
    { label: "Malaysia" },
    { label: "Mozambique" },
    { label: "Ghana" },
    { label: "Yemen" },
    { label: "Nepal" },
    { label: "Venezuela" },
    { label: "Madagascar" },
    { label: "Cameroon" },
    { label: "Côte d'Ivoire" },
    { label: "North Korea" },
    { label: "Australia" },
    { label: "Niger" },
    { label: "Taiwan" },
    { label: "Sri Lanka" },
    { label: "Burkina Faso" },
    { label: "Mali" },
    { label: "Romania" },
    { label: "Malawi" },
    { label: "Chile" },
    { label: "Kazakhstan" },
    { label: "Zambia" },
    { label: "Guatemala" },
    { label: "Ecuador" },
    { label: "Netherlands" },
    { label: "Syria" },
    { label: "Cambodia" },
    { label: "Senegal" },
    { label: "Chad" },
    { label: "Somalia" },
    { label: "Zimbabwe" },
    { label: "Guinea" },
    { label: "Rwanda" },
    { label: "Benin" },
    { label: "Burundi" },
    { label: "Tunisia" },
    { label: "Bolivia" },
    { label: "Belgium" },
  ];
  return (
    <div className="main">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                data(e.target.value);
              }}
            >
              <Autocomplete
                disablePortal
                id="countries"
                options={countries}
                sx={{ width: 320 }}
                getOptionLabel={(option) => option.label}
                onInputChange={(event, value) => data(value)}
                renderInput={(params) => (
                  <TextField {...params} label="Countries" />
                )}
              />
              {/* <input
              placeholder="Search a country ..."
              type="text"
              onChange={(e) => {
                e.preventDefault(); data(e.target.value)
              }}
            /> */}
            </form>
          </div>
          {countrydata ? (
            <div className="data">
              <div>
                {" "}
                <img
                  className="flag"
                  src={countrydata.name && countrydata.flags.png}
                ></img>
              </div>
              <h3>{countrydata.name && countrydata.name.common} </h3>
              <div>Capital: {countrydata.name && countrydata.capital} </div>
              <div>
                Population: {countrydata.name && countrydata.population}{" "}
              </div>
              <div>
                Borders: {countrydata.borders && countrydata.borders.join(", ")}
              </div>
            </div>
          ) : (
            <div>Search for a country ..</div>
          )}
        </div>
      )}
    </div>
  );
}
