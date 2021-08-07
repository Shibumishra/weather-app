import React, { Component } from 'react'
import "./CurrentWeather.css";

export class currentWeather extends Component {
    render() {
            const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
            
        return (
            <div className="current-weather">
                <div className="current-weather_content">
                    <p className="current-weather-temp">{this.props.currentTemperature}</p>
                    <p className="current-weather_description">{this.props.description}</p>
                    <img className="current-weather_icon" src={url} alt={this.props.description} />
                </div>
                <div>
                    <p className="current-weather_feels-like">
                        Feels Like {this.props.feelsLike}
                    </p>
                    <p>City: {this.props.location}</p>
                </div>
            </div>
        )
    }
}

export default currentWeather;
