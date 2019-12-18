import React, { useState } from 'react';
import Search from './components/Search';
import WeatherResults from './components/WeatherResults';
import './App.css'
import { Route } from 'react-router-dom';
import DisplayForecast from './components/DisplayForecast';
import ErrorCrad from './components/ErrorCard';

function App() {
    const [response, setResponse] = useState()
    const handleResponse = (response) => {
        console.log(response)
        setResponse(response)
    }

    return (
        <div className="container">
            <h2>Weather App</h2>
            <Route exact path="/" render={
                (props) => (
                    <div>
                        <Search onResult={(response) => handleResponse(response) } />
                        <WeatherResults weatherInfo={response} />
                    </div>
                )
            }
            />
            <Route path="/forecast/:cityName" render={(props) => <DisplayForecast {...props} />}/>
            <Route path="/error" render={props => <ErrorCrad {...props}/>}/>
        </div>

    )
}

export default App;