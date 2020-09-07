import React, {useState} from 'react';
import moment from 'moment-timezone';
import {Flex, Box} from 'reflexbox';
import {Button} from 'rebass';
import {Textarea} from '@rebass/forms';
import {appButton, flexColumn, textareaAddEdit} from '../Style/styles';


const AddTodoForm = props => {
    const initialFormState = {id: null, name: '', username: '', completed: false};

    const [todo, setTodo] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setTodo({...todo, [name]: value});
    };

    return (
        <Box
            as={'form'}
            onSubmit={(event) => {
                event.preventDefault();
                if (!todo.name)
                {
                    return;
                }
                todo.entryDate = moment();
                props.addTodo(todo);
                setTodo(initialFormState);
            }}
        >
            <Flex
                {...flexColumn}
            >
                <Textarea
                    {...textareaAddEdit}
                    placeholder={'Add todo'} type='text' name='name' maxLength='140' value={todo.name}
                    onChange={handleInputChange}
                />
                <Box
                    fontSize={12}
                    {...todo.name.length === 140 ? {color: '#dc3545'} : null}
                >
                    Letters: {todo.name.length} / 140
                </Box>
                <Button
                    {...appButton}
                >
                    Add new todo
                </Button>
            </Flex>
        </Box>
    )
};

export default AddTodoForm;