import React, { useState, useEffect } from "react";

import Input from "./components/Input.js";
import MappedData from "./components/MappedData.js";

import Data from "./data.json";

export default function App() {
  const [input, setInput] = useState("delhi");
  const [wData, setWData] = useState([]);
  const [loading, setLoading] = useState(true);

  const CALL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${input}&days=1&aqi=no&alerts=no`;

  const getData = () => {
    fetch(CALL)
      .then((resp) => resp.json())
      .then((data) => setWData([data]));
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, [input]);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-10 sm flex flex-col items-center justify-center">
        <Input setLoading={setLoading} setInput={setInput} />
        {loading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin my-4 -ml-1 mr-3 h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p>Hold on</p>
          </div>
        ) : (
          <MappedData wData={wData} />
        )}
      </div>
    </div>
  );
}
