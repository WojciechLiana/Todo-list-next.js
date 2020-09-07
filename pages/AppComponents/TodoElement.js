import React from 'react';
import {Box, Flex} from 'reflexbox';
import {
    todoCompleted,
    todoElementButtons,
    todoElementDate,
    todoElementTekst,
    todoOngoing
} from '../Style/styles';
import moment from 'moment-timezone';
import TodoElementButton from './TodoElementButton';

const TodoElement = (props) => {
    return (
        <Flex
            {...props.todo.completed ? todoCompleted : todoOngoing}
        >
            <Box
                {...todoElementDate}
            >
                <Box>
                    {moment(props.todo.entryDate).format('ll')}
                </Box>
                <Box>
                    {moment(props.todo.entryDate).format('LTS')}
                </Box>
            </Box>
            <Flex
                {...todoElementButtons}
            >
                <TodoElementButton action={props.editRow} actionFncArg={props.todo} label={'Edit'}/>
                <TodoElementButton action={props.deleteTodo} actionFncArg={props.todo.id} label={'Delete'}/>
                <TodoElementButton action={props.completeTodo} actionFncArg={props.todo} label={'Completed'}/>
            </Flex>
            <Box
                {...todoElementTekst}
            >
                {props.todo.name}
            </Box>
        </Flex>
    );
};

export default TodoElement;