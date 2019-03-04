import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import InputDate from '../../components/UI/Inputs/Date/Date';
import InputText from '../../components/UI/Inputs/Text/Text';
import InputRadio from '../../components/UI/Inputs/Radio/Radio';
import Button from '../../components/UI/Buttons/Button';

class JobSearch extends Component {

    addJobHandler = () => {
        console.log('adding job');
    }

    render() {
        return (
            <Aux>
                <h1>Job Search</h1>
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
                    id="jobLocation" />
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
                    id="recruiterName" />
                <InputText
                    label="Recruiter Agency"
                    type="text"
                    id="recruiterAgency" />

                <Button
                    addJob={this.addJobHandler}>Add Job</Button>
            </Aux>
        );
    }
};

export default JobSearch;