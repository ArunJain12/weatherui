import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// var zipcodes = require('zipcodes');

function Search(props) {
    const [city, setCity] = useState([]);

    const handleChange = e => {
        const options = e.target.options;
        let values = []
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                values.push(options[i].value)
            }
        }
        setCity(values)
        // var hills = zipcodes.lookup(560045);
        // console.log(hills)
       
    }
    const searchWeather = async (e) => {
        e.preventDefault();
        console.log(city)
        
        const response = await axios({
            url: `http://localhost:5000/weather-search/${city}`,
            method: 'GET'
        })
        console.log(response)
        if(response.status === 200) {
            props.onResult(response.data)
        } else {
            props.history.push('/error')
        }
    }

    return (
        <Fragment>
            <div className="form-group">
                <label><b>Select City</b></label>
                <select multiple className="form-control" id="city" onChange={e => handleChange(e)}>
                    <option value="sunnyvale">SunnyVale</option>
                    <option value="newyork">NewYork</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="charlotte">Charlotte</option>
                </select>
            </div>
            <button className="btn btn-info" onClick={e => searchWeather(e)}>GetWeather</button>
        </Fragment>
    )
}

Search.prototypes = {
    onResult: PropTypes.func
}

export default Search;