import React, {useState, useEffect} from 'react';
import moment from 'moment-timezone';
import {Button} from 'rebass';
import {Box, Flex} from 'reflexbox';
import {Textarea} from '@rebass/forms';
import {appButton, flexColumn, textareaAddEdit} from '../Style/styles';

const EditTodoForm = props => {
    useEffect(
        () => {
            setTodo(props.currentTodo)
        },
        [props]
    );

    const handleInputChange = event => {
        const {name, value} = event.target;
        setTodo({...todo, [name]: value})
    };

    const [todo, setTodo] = useState(props.currentTodo);

    return (
        <Box
            as={'form'}
            onSubmit={(event) => {
                event.preventDefault();
                todo.entryDate = moment();
                props.updateTodo(todo.id, todo);
            }}
        >
            <Flex
                {...flexColumn}
            >
                <Textarea
                    {...textareaAddEdit}
                    placeholder={'Edit todo'} type='text' name='name' value={todo.name} maxLength='140'
                    onChange={handleInputChange}
                />
                <Box
                    fontSize={12}
                    {...todo.name.length === 140 ? {color: '#dc3545'} : null}
                >
                    Letters: {todo.name.length} / 140
                </Box>
                <Box>
                    <Button
                        {...appButton}
                    >
                        Update todo
                    </Button>
                    <Button
                        {...appButton}
                        onClick={() => props.setEditing(false)}
                    >
                        Cancel
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
};

export default EditTodoForm;