import React, { useEffect, useState } from "react";
import "./GetApi.css";

export default function GetApi() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, []);

  console.log(trips);

  return (
    <div className="trip-list">
      <h1>لیست تورهای خوزستان</h1>
      <ul>
        {trips.map((trp) => (
          <li key={trp.id}>
            <h2>{trp.title}</h2>
            <h4>{trp.stay}</h4>
            <p>{trp.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
