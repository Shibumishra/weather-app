import React, { Component } from 'react';
import './HourlyForeCast.css';

export class DailyForeCast extends Component {
    render() {
        const foreCastItem = this.props.dailyForeCast.map((D, i) =>{
            const url = `http://openweathermap.org/img/wn/${D.weather[0].icon}@2x.png`
            let dayname = new Date(D.dt * 1000).toLocaleDateString("en", {
                weekday: "long",
            });
            let temp = D.temp.day.toFixed(0);
            let min = D.temp.min.toFixed(0);
            let max = D.temp.max.toFixed(0);

            return(
                <div className="forecast-item" key={i}>
					<p>{dayname}</p>
                    <img src={url} alt={D.weather.description} />
                    <p>{temp} <sup>°C</sup> </p>
                    <p>min: {min}<sup>°C</sup>  max: {max}<sup>°C</sup></p>
                    <p>{D.weather[0].main}</p>
                </div>
            )
        })
        return (
            <>
            <div className="forecast">
            <h3 className="forecast-title">Daily forecast</h3>
                <div className="forecast-items">{foreCastItem}</div>
            </div>
            </>
        )
    }
}

export default DailyForeCast
