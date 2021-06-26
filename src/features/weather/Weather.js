import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather, setZipcode } from "./weatherSlice";

const Weather = () => {
  const [newZipcode, setNewZipcode ] = useState('');
  const { metadata, temperature, zipcode } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather({ zipcode }));
  }, [dispatch, zipcode]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (newZipcode === "") {
      return;
    }

    dispatch(setZipcode(newZipcode));
    setNewZipcode("");
  };

  return (
    <div className="weather">
      <div className="temperature-container">
          <form id="zipcode" onSubmit={onFormSubmit}>
            <input
              type="text"
              className="zipcode-input"
              placeholder="Enter your zipcode"
              value={newZipcode}
              onChange={(e) => {
                setNewZipcode(e.target.value);
              }}
              aria-label="New journal entry"
            />
          </form>
        <img
          src={`http://openweathermap.org/img/wn/${metadata.icon}@2x.png`}
          alt=""
        />
        <div className="weather-text">
          <p className="temperature">{temperature}°</p>
          <p className="weather-description">{metadata.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
