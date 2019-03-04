import React from 'react';

const inputRadio = (props) => (
    <div>
        <input 
            type="radio"
            id={props.id}
            name={props.name}
            value={props.value}
            defaultChecked={props.checked ? "checked" : ""} />
        <label htmlFor={props.id}>{props.label}</label>
    </div>
);

export default inputRadio;