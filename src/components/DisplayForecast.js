import React from 'react';
import { Link } from 'react-router-dom';

function DisplayForecast(props) {
    console.log(props.location.state.forecasts)
    const renderTableData = () => {
        return props.location.state.forecasts.map((forecastInfo, index) => {
            return (<tr key={index}>
                <td>{forecastInfo.day}</td>
                <td>{forecastInfo.date}</td>
                <td>{forecastInfo.low}</td>
                <td>{forecastInfo.high}</td>
                <td>{forecastInfo.text}</td>
            </tr>)
        })
    }
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Date</th>
                        <th scope="col">Low</th>
                        <th scope="col">High</th>
                        <th scope="col">Text</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderTableData()
                    }
                </tbody>
            </table>
            <Link to="/" className="btn btn-primary">Go back to Weather Search </Link>
        </div>
    )
}

export default DisplayForecast;