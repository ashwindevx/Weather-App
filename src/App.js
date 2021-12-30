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
        {loading ? <p>Loading...</p> : <Input setInput={setInput} />}
        <MappedData wData={wData} />
      </div>
    </div>
  );
}
