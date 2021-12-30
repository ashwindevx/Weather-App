import React, { useState } from "react";

const Input = ({ setInput, setLoading }) => {
  const [city, setCity] = useState("delhi");

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInput(city);
    setLoading(true);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search city"
          onChange={changeHandler}
          value={city}
          className="p-2 border-2 rounded-lg w-96"
        />
      </form>
    </div>
  );
};

export default Input;
