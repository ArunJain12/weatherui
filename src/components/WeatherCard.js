import React from 'react';
import { Link } from 'react-router-dom';

function WeatherCard(props) {
    console.log(props.info)
    const { location, current_observation, forecasts } = props.info;

    return (
        <div className="row">
            <div className="card text-center">
                <div className="card-header">{location.city}, <b>{location.country}</b>
                    &nbsp;({location.region.split(' ')[1]})
                </div>
                <div className="card-body">
                    <h5 className="card-title">Wind Forecast</h5>
                    <p className="card-text">
                        <b>Direction: </b>{current_observation.wind.direction} Degree
                        <b>, Speed: </b>{current_observation.wind.speed} Mile Per Hour
                    </p>
                    <hr />
                    <h5 className="card-title">Atmosphere Forecast</h5>
                    <p className="card-text">
                        <b>Humidity: </b>{current_observation.atmosphere.humidity} %
                        <b>, Visibility: </b>{current_observation.atmosphere.visibility}
                        <b>, Pressure: </b>{current_observation.atmosphere.pressure} Inch Hg
                    </p>
                    <hr />
                    <h5 className="card-title">Astronomy Forecast</h5>
                    <p className="card-text">
                        <b>Sunrise: </b>{current_observation.astronomy.sunrise}
                        <b>, Sunset: </b>{current_observation.astronomy.sunset}
                    </p>
                    <Link to={{ pathname: `/forecast/${location.city}`, state: { forecasts: forecasts} }} 
                          className="btn btn-primary">
                        Weather Forecasts
                    </Link>
                </div>
                <div className="card-footer text-muted">
                    {current_observation.condition.text}, {current_observation.condition.temperature} Fahrenheit
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;