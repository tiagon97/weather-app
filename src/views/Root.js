import React, { Component } from "react";
import GlobalStyles from "../theme/GlobalStyles";
import Form from "../components/Form/Form";
import FetchResult from "../components/FetchResult/FetchResult.js";

class App extends Component {
  state = {
    value: "",
    temp: "",
    wind: "",
    cloudiness: "",
    pressure: "",
    humidity: "",
    sunrise: "",
    sunset: "",
    date: "",
    cityName: "",
    error: false,
    animate: true,
  };

  handleInputOnChange = (e) => {
    this.setState({
      value: e.target.value,
      animate: false,
    });
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=ec07133777be04a36f3647d13eff4d0d&units=metric`;
    try {
      const response = await fetch(API);
      const data = await response.json();
      const date = new Date().toLocaleString();
      this.setState({
        temp: data.main.temp,
        wind: data.wind.speed,
        cloudiness: data.weather[0].description,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        date,
        cityName: this.state.value,
        error: false,
        animate: true,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error: true,
        cityName: this.state.value,
      });
    }
    if (this.state.value === "") {
      return alert("Proszę podać miasto!");
    }

    this.setState({
      value: "",
    });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <GlobalStyles />
        <Form
          value={value}
          changeInput={this.handleInputOnChange}
          submit={this.handleSubmitForm}
        />
        <FetchResult state={this.state} />
      </>
    );
  }
}

export default App;
