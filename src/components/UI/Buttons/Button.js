import React from 'react';

const button = (props) => {
    return (
        <button
            onClick={props.addJob} type="submit">{props.children}</button>
    );
};

export default button;