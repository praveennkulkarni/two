import React, { useState } from "react";

function City() {
  let [cities, setCities] = useState([]);

  let data = [
    {
      state: "karnataka",
      city: ["Bangalore", "Mysure", "Gulbarga", "Hubli"],
    },
    {
      state: "Maharastra",
      city: ["Pune", "Mumbai", "Solapur"],
    },
  ];

  let changeState = (e) => {
    data.filter((a) => {
      if (a.state === e.target.value) {
        setCities(a.city);
      }
    });
  };
  return (
    <div>
      <label for="cars">Choose your State</label>
      <select name="state" id="state" onChange={changeState}>
        <option value="">Select Cities</option>
        {data.map((z) => {
          return <option value={z.state}>{z.state}</option>;
        })}
      </select>
      <br />
      <h3>The cities are</h3>
      <select>
        <option value="">Select City</option>

        {cities.map((city) => {
          return <option value={city}>{city}</option>;
        })}
      </select>
    </div>
  );
}

export default City;
