import React from "react";
import "./App.css";
import Navigationbar from "./components/NavigationBar.js";
import WeatherFetch from "./components/WeatherFetch.js";

import Axios from "axios";

class App extends React.Component {
  state = {
    chords: {
      lat: 45,
      lon: 60,
      cityName: "Goa",
    },
    data: {},
    inputData: "",
  };

  componentDidMount() {
    if (navigator.geolocation) {
      console.log("geolocation available");

      navigator.geolocation.getCurrentPosition((position) => {
        let NewChords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        this.setState({ chords: NewChords });

        Axios.get(
          `http://api.weatherstack.com/current?access_key=014dbeb7403de3e934b03fdf55f405cf&query=${this.state.chords.lat},${this.state.chords.lon}`
        ).then((res) => {
          console.log(res);
          // axios
          // .get(`http://api.weatherstack.com/current?access_key=014dbeb7403de3e934b03fdf55f405cf&query=${this.state.inputData}`)
          // .then((res) => {
          //   console.log(res);
          let weatherResponseData = {
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            location: res.data.location.name,
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons,
          };

          this.setState({ data: weatherResponseData });
        });
        console.log(" Api call completed");
      });
    } else {
      console.log("no geo location availbale");
    }
  }

  change = (value) => {
    console.log("changing the value");

    this.setState({ inputData: value });
    console.log("changing value done");
  };

  changeWeather = (e) => {
    console.log("calling change weather");
   // e.preventDefault();

    console.log("here i am in ");
    console.log(this.state.inputData);
    //api call
    Axios.get(
      `http://api.weatherstack.com/current?access_key=014dbeb7403de3e934b03fdf55f405cf&query=${this.state.inputData}`
    )
      .then((res) => {
        console.log(res);
        let newweatherResponseData = {
          temperature: res.data.current.temperature,
          description: res.data.current.weather_descriptions[0],
          location: res.data.location.name,
          region: res.data.location.region,
          country: res.data.location.country,
          wind_speed: res.data.current.wind_speed,
          pressure: res.data.current.pressure,
          precip: res.data.current.precip,
          humidity: res.data.current.humidity,
          img: res.data.current.weather_icons,
        };
        this.setState({ data: newweatherResponseData });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Navigationbar
          changeInput={this.change}
          changeWeather={this.changeWeather}
        />
        <WeatherFetch data={this.state.data} />
      </div>
    );
  }
}

export default App;
