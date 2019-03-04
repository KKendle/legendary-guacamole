import React from 'react';

import Aux from '../../../../hoc/Aux';
import InputText from '../Text/Text';

const inputDate = (props) => {
    console.log('[date]');

    return (
        <Aux>
            <div>
                <InputText 
                    id="dateMonth"
                    label="Month"
                    type="text"
                    name="dateMonth" />
            </div>
            <div>
                <InputText
                    id="dateDay"
                    label="Day"
                    type="text"
                    name="dateDay" />
            </div>
            <div>
                <InputText
                    id="dateYear"
                    label="Year"
                    type="text"
                    name="dateYear" />
            </div>
        </Aux>
    );
};

export default inputDate;