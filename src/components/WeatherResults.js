import React from 'react';
import WeatherCard from './WeatherCard';

function WeatherResults(props) {
    // console.log(props.weatherInfo)
    return (
        <React.Fragment>
            {
                (props.weatherInfo === undefined)? 
                (<div className="alert alert-info">Please select a city and then search</div>):
                props.weatherInfo.map((info, index) => {
                    return (<WeatherCard key={index} info={JSON.parse(info)}/>)
                })
            }
        </React.Fragment>
    )
}

export default WeatherResults;