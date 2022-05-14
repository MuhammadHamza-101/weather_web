import React, { useState } from "react";

function WeatherDetailes({
  humidity,
  pressure,
  temp,
  name,
  speed,
  deg,
  country,
  sunset,
}) {
  const [weatherState, setWeatherState] = useState("");
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">{country}</div>
          </div>
        </div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
           
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftSide">
                6:30 pm <br /> {sunset}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherDetailes;
