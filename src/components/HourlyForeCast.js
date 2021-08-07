import React, { Component } from 'react';
import './HourlyForeCast.css';

export class ForeCast extends Component {
    render() {
        const foreCastItem = this.props.hourlyForeCast.map((f, i) =>{
            const url = `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`
            let ampm = 'AM';
            let hour = new Date(f.dt * 1000).getHours();
            if(hour > 12){
                hour = hour - 12;
                ampm = 'PM';
            }
            let temp = f.temp.toFixed(0);
            return(
                <div className="forecast-item" key={i}>
                    <p className="forecast-item_hour">{hour}:00{ampm}</p>
                    <p className="forecast-item_temp">{temp}<sup>°C</sup></p>
                    <img src={url} alt={f.weather.description} />  
                    <p className="forecast-item_description">{f.weather[0].main}</p>
                </div>
            )
        })
        return (
            <div className="forecast">
                <h3 className="forecast-title">Horuly Forecast</h3>
                <div className="forecast-items">{foreCastItem}</div>
            </div>
        )
    }
}

export default ForeCast;
