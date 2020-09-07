import React from 'react';
import {Flex, Box} from 'reflexbox';
import {todoCounter} from '../Style/styles';

const TodoCounter = props => {
    const completed = props.todos.filter(todo => todo.completed).length;
    const ongoing = props.todos.filter(todo => !todo.completed).length;

    return (
        <Flex
            {...todoCounter}
        >
            <Box>
                Completed: {completed}
            </Box>
            <Box>
                Ongoing: {ongoing}
            </Box>
        </Flex>
    );
};

export default TodoCounter;