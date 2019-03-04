import React from 'react';

const button = (props) => {
    return (
        <button
            onClick={props.addJob}>{props.children}</button>
    );
};

export default button;