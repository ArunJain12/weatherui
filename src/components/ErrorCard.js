import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function ErrorCard() {
    return (
        <Fragment>
            <div className="card text-white bg-danger mb-3" style={{ maxWidth: '48rem' }}>
                <div className="card-header">Error from Yahoo API</div>
                <div className="card-body">
                    <h5 className="card-title">Danger card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <Link to="/" className="btn btn-primary">Go back to Weather Search </Link>
        </Fragment>
    )
}

export default ErrorCard