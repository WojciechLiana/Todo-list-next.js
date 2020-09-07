import React from 'react';
import TodoElement from './TodoElement';
import {Box} from 'reflexbox';
import {noTodos} from '../Style/styles';

const TodoList = props => {
    return (
        <Box>
            {props.todos.length > 0 ?
                (
                    !props.hidden ? (
                        props.todos.map(todo => (
                            <TodoElement key={todo.id} editRow={props.editRow} completeTodo={props.completeTodo}
                                         deleteTodo={props.deleteTodo} todo={todo}/>
                        ))
                    ) : (
                        (props.todos.filter(todo => !todo.completed).length ?
                                (
                                    props.todos.filter(todo => !todo.completed).map(todo => (
                                        <TodoElement key={todo.id} editRow={props.editRow}
                                                     completeTodo={props.completeTodo}
                                                     deleteTodo={props.deleteTodo} todo={todo}/>
                                    ))
                                ) : (
                                    <Box
                                        {...noTodos}
                                    >
                                        No todos
                                    </Box>
                                )
                        )
                    )
                ) :
                (
                    <Box
                        {...noTodos}
                    >
                        No todos
                    </Box>
                )}
        </Box>
    );
};

export default TodoList;