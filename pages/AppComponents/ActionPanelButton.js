import React from 'react';
import {Button} from 'rebass';
import {appButton} from '../Style/styles';

const ActionPanelButton = (props) => {
    return (
        <Button
            {...appButton}
            onClick={() => props.setHidden(!props.hidden)}
        >
            {props.label}
        </Button>
    );
};

export default ActionPanelButton;