import {todoElementButton} from '../Style/styles';
import {Button} from 'rebass';
import React from 'react';

const TodoElementButton = (props)=> {
    return(
        <Button
            {...todoElementButton}
            onClick={() => {
                props.action(props.actionFncArg)
            }}
        >
            {props.label}
        </Button>
    );
};

export default TodoElementButton;