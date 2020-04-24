import React from 'react';

import Spinner from 'react-spinkit';

export default function Loading ({ loading, message }) {
    return loading ? (
        <div className="overlay-content">
            <div className="wrapper">
                <Spinner
                    name="ball-triangle-path"
                    fadeIn="none"
                    color="blue"
                />
                <span className="message">
                    {message}
                </span>
            </div>
        </div>
    ) : <></>;
}