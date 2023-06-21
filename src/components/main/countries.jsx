import React, { Component, useEffect, useState } from 'react'
import Loading from '../loading';

export default function Countries() {
    const API = 'https://restcountries.com/v3.1/name/';
    const [loading, setLoading] = useState(false);
    const [countrydata, setcountryData ] = useState({});
    useEffect(() => {
        data("netherlands");
        setLoading(true);
        setInterval(() => {
          setLoading(false);
        }, 500);
      }, []);
    

    async function data(input) {
        if (!input) return;
        let response = await fetch(API + input);
        let datajson = await response.json();
        setcountryData(datajson[0]);
    }

    

    return (
        <div className="main">
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <div>
                    <form
            className="form"
            onSubmit={(e) => { e.preventDefault(); data(e.target.value) }}
          >
            <input
              placeholder="Search a country ..."
              type="text"
              onChange={(e) => {
                e.preventDefault(); data(e.target.value)
              }}
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
                    </div>
                    { countrydata ? (
                        <div className='data'> 
                            <div> <img className='flag' src={countrydata.name && countrydata.flags.png }></img></div>
                        <h3>{ countrydata.name && countrydata.name.common } </h3>
                            <div>Capital: { countrydata.name && countrydata.capital} </div>
                            <div>Population: { countrydata.name && countrydata.population} </div>
                            <div>Borders: {countrydata.name && countrydata.borders.join(', ')}</div>
                        </div>
                    ) : (
                        <div></div>
                    )

                    }
                </div>
            )}
      </div>
    )
}
