import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { getCurrentWeather, getForeCast } from './api';
import CurrentWeather from './components/CurrentWeather';
import ForeCast from './components/HourlyForeCast';
import DailyForeCast from './components/DailyForeCast';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      temp: "",
      feelsLike: "",
      description: "",
      icon: "",
      hourlyForeCast: [],
      dailyForeCast: []
    };
  }
  componentDidMount(){
    this.onFormSubmit();
  }

  onInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  async onFormSubmit() {
    const weatherRes = await getCurrentWeather(this.state.location);
    const lat = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    const foreCastRes = await getForeCast(lat, lon);

    this.setState({
      temp: weatherRes.data.main.temp,
      feelsLike: weatherRes.data.main.feels_like,
      description: weatherRes.data.weather[0].main,
      icon: weatherRes.data.weather[0].icon,
      hourlyForeCast: foreCastRes.hourly,
      dailyForeCast: foreCastRes.daily 
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            location={this.state.location}
            inputChange={(e) => this.onInputChange(e)}
            formSubmitted={() => this.onFormSubmit()}
          />
          <CurrentWeather
            currentTemperature={this.state.temp}
            feelsLike={this.state.feelsLike}
            description={this.state.description}
            icon={this.state.icon}
            location={this.state.location}
          />
          <ForeCast hourlyForeCast={this.state.hourlyForeCast} />

          <DailyForeCast dailyForeCast = {this.state.dailyForeCast} />
        </header>
      </div>
    )
  }
}
export default App;
