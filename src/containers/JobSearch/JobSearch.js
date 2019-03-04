import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import InputDate from '../../components/UI/Inputs/Date/Date';
import InputText from '../../components/UI/Inputs/Text/Text';
import InputRadio from '../../components/UI/Inputs/Radio/Radio';
import Button from '../../components/UI/Buttons/Button';

class JobSearch extends Component {

    state = {
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
    }

    render() {
        return (
            <Aux>
                <h1>Job Search</h1>
                <form onChange={this.changeHandler}>
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
            </Aux>
        );
    }
};

export default JobSearch;