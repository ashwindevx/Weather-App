import React from "react";

import CurrWeather from "./CurrWeather.js";
import Forecast from "./Forecast.js";

const MappedData = ({ wData }) => {
  return (
    <>
      {wData.map((data) => {
        // CurrWeather data
        const city = data.location.name;
        const country = data.location.country;
        const currTemp = data.current.temp_c;
        const currIcon = data.current.condition.icon;
        // Forecast data
        const dayForcast = data.forecast.forecastday[0].hour;
        return (
          <div key={Math.random()} className="flex flex-col items-center">
            <CurrWeather
              city={city}
              country={country}
              currTemp={currTemp}
              currIcon={currIcon}
            />
            <Forecast dayForcast={dayForcast} />
          </div>
        );
      })}
    </>
  );
};

export default MappedData;
