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
                    type="text" />
            </div>
            <div>
                <InputText
                    id="dateDay"
                    label="Day"
                    type="text" />
            </div>
            <div>
                <InputText
                    id="dateYear"
                    label="Year"
                    type="text" />
            </div>
        </Aux>
    );
};

export default inputDate;