import React, { useEffect, useState } from "react";
import "../components/style.css";
import WeatherDetailes from "./WeatherDetailes";

function SearchMain() {
  const [text, seText] = useState("karachi");
  const [weather, setWeather] = useState({});

  const getWeatherInfio = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=669e4282028e8d0a5d4725c3f664813a`;
      let res = await fetch(url);
      let data = await res.json();
      const { humidity, pressure, temp } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed, deg } = data.wind;
      const { country, sunset } = data.sys;

      const WeatherInfo = {
        humidity,
        pressure,
        temp,
        name,
        speed,
        deg,
        country,
        sunset,
      };

      setWeather(WeatherInfo);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getWeatherInfio();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search City "
            id="search"
            value={text}
            onChange={(e) => seText(e.target.value)}
          />
        </div>
        <button className="searchButton" onClick={getWeatherInfio}>
          Search
        </button>
      </div>
      <WeatherDetailes {...weather} />
    </>
  );
}

export default SearchMain;
