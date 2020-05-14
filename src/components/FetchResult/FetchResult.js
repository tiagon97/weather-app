import React from "react";
import styled, { keyframes, css } from "styled-components";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const appear = keyframes`
  from {
    opacity: 0;
    top: 35px;
  }
  to {
    opacity: 1;
    top: 0;
}
`;

const Wrapper = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  height: 60vh;
  width: 450px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.6);
  animation: ${(props) =>
    props.shouldAnimate
      ? css`
          ${appear} 0.5s ease
        `
      : " "};
  h1 {
    font-size: 2.4rem;
  }
`;
const FetchResult = (props) => {
  const {
    temp,
    wind,
    cloudiness,
    pressure,
    humidity,
    sunrise,
    sunset,
    date,
    cityName,
    error,
    animate,
  } = props.state;

  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  let content = null;
  if (!error && cityName) {
    content = (
      <Wrapper shouldAnimate={animate}>
        <h1>{cityName ? `Dane dla miasta ${capitalize(cityName)}` : ""}</h1>
        <p>Data: {date}</p>
        <p>Temperatura: {temp}&deg;C</p>
        <p>Zachmurzenie: {cloudiness}</p>
        <p>Wiatr: {wind} m/s</p>
        <p>Ciśnienie: {pressure} hpa</p>
        <p>Wilgotność: {humidity}%</p>
        <p>Wschód słońca o godzinie: {sunriseTime}</p>
        <p>Zachód słońca o godzinie: {sunsetTime}</p>
      </Wrapper>
    );
  }

  return (
    <>
      {error
        ? `Brak miasta ${capitalize(cityName)} w bazie lub niepoprawna wartość`
        : content}
    </>
  );
};

export default FetchResult;
