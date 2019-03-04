import React from 'react';

const job = (props) => (
    <div>
        <h3>{props.company}</h3>
        <p>{props.jobTitle}</p>
        <a href={props.jobLink}>{props.jobLink}</a>
        <p>{props.jobLocation}</p>
        <p>{props.jobStatus}</p>
        <p>{props.recruiter} recruiter</p>
        <p>{props.recruiterName}</p>
        <p>{props.agency}</p>
        <div>
            <p>{props.month}/{props.day}/{props.year}</p>
        </div>
    </div>
);

export default job;