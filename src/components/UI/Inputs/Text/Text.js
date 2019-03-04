import React from 'react';

import './Text.scss';

const inputText = (props) => (
    <div className="input">
        <label htmlFor={props.id}>{props.label}</label>
        <input
            type={props.type}
            id={props.id} />
    </div>
);

export default inputText;