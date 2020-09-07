import TodoCounter from './TodoCounter';
import {Flex, Box} from 'reflexbox';
import React from 'react';
import {flexRow} from '../Style/styles';
import ActionPanelButton from './ActionPanelButton';

const TodoActionPanel = (props) => {
    return (
        props.todos.length ?
            (
                <Box>
                    <Flex
                        {...flexRow}
                    >
                        <TodoCounter todos={props.todos}/>
                        <Flex
                            mx={2}
                        >
                            {
                                props.hidden ?
                                    (
                                        <ActionPanelButton
                                            label={'Show Completed'} setHidden={props.setHidden} hidden={props.hidden}
                                        />
                                    ) : (
                                        <ActionPanelButton
                                            label={'Hide Completed'} setHidden={props.setHidden} hidden={props.hidden}
                                        />
                                    )
                            }
                        </Flex>
                    </Flex>
                </Box>
            ) :
            null
    );
};

export default TodoActionPanel;