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
        jobLocation: '',
        recruiterName: '',
        recruiterAgency: '',
        sampleOne: '',
        sampleTwo: ''
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
        console.log(this.state.jobLocation);
        console.log(this.state.recruiterName);
        console.log(this.state.recruiterAgency);
        console.log(this.state.sampleOne);
        console.log(this.state.sampleTwo);
    }

    render() {
        return (
            <Aux>
                <h1>Job Search</h1>
                <form>
                    <InputDate />
                    <InputText
                        label="Company"
                        type="text"
                        id="company"
                        changed={this.changeHandler} />
                    <InputText
                        label="Job Title"
                        type="text"
                        id="jobTitle"
                        changed={this.changeHandler} />
                    <InputText
                        label="Job Link"
                        type="text"
                        id="jobLink"
                        changed={this.changeHandler} />
                    <div>
                        <div>Did you use a recruiter?</div>
                        <InputRadio
                            label="No"
                            group="recruiter"
                            id="recruiterNo"
                            checked={true} />
                        <InputRadio
                            label="Yes"
                            group="recruiter"
                            id="recruiterYes" />
                    </div>
                    <InputText
                        label="Location"
                        type="text"
                        id="jobLocation"
                        changed={this.changeHandler} />
                    <div>
                        <div>Status</div>
                        <InputRadio
                            label="Submitted"
                            group="jobStatus"
                            id="jobStatusSubmitted"
                            checked={true} />
                        <InputRadio
                            label="Interviewing"
                            group="jobStatus"
                            id="jobStatusInterviewing" />
                        <InputRadio
                            label="Awaiting Response"
                            group="jobStatus"
                            id="jobStatusAwatingResponse" />
                        <InputRadio
                            label="Offer"
                            group="jobStatus"
                            id="jobStatusOffer" />
                    </div>
                    <InputText
                        label="Recruiter Name"
                        type="text"
                        id="recruiterName"
                        changed={this.changeHandler} />
                    <InputText
                        label="Recruiter Agency"
                        type="text"
                        id="recruiterAgency"
                        changed={this.changeHandler} />

                    <input type="text" name="sampleOne" onChange={this.changeHandler} />
                    <input type="text" name="sampleTwo" onChange={this.changeHandler} />
                    <Button
                        addJob={this.submitHandler}>Add Job</Button>
                </form>
            </Aux>
        );
    }
};

export default JobSearch;