import React from "react";

const CurrWeather = ({ wData, city, country, currTemp, currIcon }) => {
  return (
    <div key={Math.random()}>
      <div className="bg-gradient-to-br from-white to-blue-100 flex flex-row justify-between items-center bg-white drop-shadow-lg w-96 my-4 p-6 rounded-3xl">
        <div>
          <p className="text-5xl font-medium mb-2">{Math.round(currTemp)}°</p>
          <p className="text-sm text-gray-400">
            {city}, {country}
          </p>
        </div>
        <img src={currIcon} alt="Current weather icon" />
      </div>
    </div>
  );
};

export default CurrWeather;
