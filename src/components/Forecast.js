import React from "react";

const Forecast = ({ dayForcast }) => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-100 flex flex-row justify-between items-center flex-wrap bg-white drop-shadow-lg w-3/4 my-4 p-6 rounded-3xl">
      {dayForcast.map((hour) => {
        const temp = Math.round(hour.temp_c);
        const time = hour.time.slice(11, 16);
        const icon = hour.condition.icon;

        return (
          <div
            key={Math.random()}
            className="flex flex-col items-center justify-center p-6"
          >
            <p className="text-lg font-medium">{temp}°</p>
            <img src={icon} alt="Hourly weather icon" className="my-4" />
            <p className="text-sm text-gray-400">
              {time.slice(0, 2) < 12
                ? `${time} AM`
                : time.slice(0, 2) > 12
                ? `${parseInt(time) - 12} PM`
                : `${time} PM`}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
