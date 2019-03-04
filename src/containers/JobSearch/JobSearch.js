import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import InputDate from '../../components/UI/Inputs/Date/Date';
import InputText from '../../components/UI/Inputs/Text/Text';
import InputRadio from '../../components/UI/Inputs/Radio/Radio';
import Button from '../../components/UI/Buttons/Button';
import JobDisplay from '../JobDisplay/JobDisplay';
import Job from '../../components/Job/Job';

class JobSearch extends Component {

    state = {
        dateMonth: '',
        dateDay: '',
        dateYear: '',
        company: '',
        jobTitle: '',
        jobLink: '',
        recruiter: '',
        jobLocation: '',
        jobStatus: '',
        recruiterName: '',
        recruiterAgency: ''
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log('submiting');
        console.log(this.state.company);
        console.log(this.state.jobTitle);
        console.log(this.state.jobLink);
        console.log(this.state.recruiter);
        console.log(this.state.jobLocation);
        console.log(this.state.jobStatus);
        console.log(this.state.recruiterName);
        console.log(this.state.recruiterAgency);
        console.log(this.state.dateMonth);
        console.log(this.state.dateDay);
        console.log(this.state.dateYear);
    }

    render() {
        const tempStyles = {
            display: 'inline-block',
            width: '40%',
            verticalAlign: 'top'
        };

        return (
            <Aux>
                <h1>Job Search</h1>
                <form onChange={this.changeHandler} style={tempStyles}>
                    <InputDate />
                    <InputText
                        label="Company"
                        type="text"
                        id="company" />
                    <InputText
                        label="Job Title"
                        type="text"
                        id="jobTitle" />
                    <InputText
                        label="Job Link"
                        type="text"
                        id="jobLink" />
                    <InputText
                        label="Location"
                        type="text"
                        id="jobLocation" />
                    <div>
                        <div>Status</div>
                        <InputRadio
                            label="Submitted"
                            name="jobStatus"
                            id="jobStatusSubmitted"
                            value="submitted"
                            checked={true} />
                        <InputRadio
                            label="Interviewing"
                            name="jobStatus"
                            id="jobStatusInterviewing"
                            value="interviewing" />
                        <InputRadio
                            label="Awaiting Response"
                            name="jobStatus"
                            id="jobStatusAwatingResponse"
                            value="awaiting response" />
                        <InputRadio
                            label="Offer"
                            name="jobStatus"
                            id="jobStatusOffer"
                            value="offer" />
                    </div>
                    <div>
                        <div>Did you use a recruiter?</div>
                        <InputRadio
                            label="No"
                            name="recruiter"
                            id="recruiterNo"
                            value="no"
                            checked={true} />
                        <InputRadio
                            label="Yes"
                            name="recruiter"
                            id="recruiterYes"
                            value="yes" />
                    </div>
                    <InputText
                        label="Recruiter Name"
                        type="text"
                        id="recruiterName" />
                    <InputText
                        label="Recruiter Agency"
                        type="text"
                        id="recruiterAgency" />

                    <Button
                        addJob={this.submitHandler}>Add Job</Button>
                </form>

                <div style={tempStyles}>
                    <JobDisplay>
                        <Job
                            company={this.state.company}
                            jobTitle={this.state.jobTitle}
                            jobLink={this.state.jobLink}
                            jobStatus={this.state.jobStatus}
                            recruiter={this.state.recruiter}
                            recruiterName={this.state.recruiterName}
                            recruiterAgency={this.state.recruiterAgency}
                            month={this.state.dateMonth}
                            day={this.state.dateDay}
                            year={this.state.dateYear} />
                    </JobDisplay>
                </div>
            </Aux>
        );
    }
};

export default JobSearch;