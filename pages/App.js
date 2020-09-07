import React, {useState} from 'react';
import AddTodoForm from './AppComponents/AddTodoForm';
import EditTodoForm from './AppComponents/EditTodoForm';
import TodoList from './AppComponents/TodoList';
import {Flex, Box} from 'reflexbox';
import {Text} from 'rebass';
import TodoActionPanel from './AppComponents/TodoActionPanel';
import {
    addEditTodoLabel,
    appElement,
    appStyles,
    flexColumn,
    yourTasks
} from './Style/styles';
import AppHeader from './AppComponents/AppHeader';
import AppSearch from './AppComponents/AppSearchField';


const App = (props) => {
    const todosData = [];
    const initialFormState = {id: null, name: '', entryDate: '', completed: false};

    const [todos, setTodos] = useState(todosData);
    const [currentTodo, setCurrentTodo] = useState(initialFormState);
    const [editing, setEditing] = useState(false);
    const [counter, setCounter] = useState(4);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedTodos, setSearchedTodos] = useState([]);
    const [hidden, setHidden] = useState(false);

    const changeZone = zone => {
        setTodos(todos.map(todo => {
                const tempTodo = Object.assign({}, todo);
                tempTodo.entryDate = todo.entryDate.tz(zone);
                return tempTodo;
            })
        );
    };

    const addTodo = todo => {
        todo.id = counter;
        setTodos([...todos, todo]);
        setCounter(counter + 1);
    };

    const deleteTodo = id => {
        setEditing(false);
        setTodos(todos.filter(todo => todo.id !== id));
        searchTerm ? setSearchedTodos(searchedTodos.filter(todo => todo.id !== id)) : null;
    };

    const completeTodo = cliskedTodo => {
        setEditing(false);
        cliskedTodo.completed = !cliskedTodo.completed;
        setTodos(todos.map(todo => (todo.id === cliskedTodo.id) ? (cliskedTodo) : (todo)));
    };

    const updateTodo = (id, updatedTodo) => {
        setEditing(false);
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    };

    const editRow = todo => {
        setEditing(true);
        setCurrentTodo({id: todo.id, name: todo.name, entryDate: todo.entryDate, completed: todo.completed});
    };

    const searchFunction = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        const searchValue = event.target.value.toLowerCase();
        setSearchedTodos(todos.filter(todo => todo.name.toLowerCase().includes(searchValue)));
    };

    return (
        <Flex
            {...appStyles}
        >
            <AppHeader changeZone={changeZone} name={props.name} setIsLogged={props.setIsLogged}/>
            <Box
                {...appElement}
            >
                {
                    editing ?
                        (
                            <Box>
                                <Text
                                    {...addEditTodoLabel}
                                >
                                    Edit todo
                                </Text>
                                <EditTodoForm
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentTodo={currentTodo}
                                    updateTodo={updateTodo}
                                />
                            </Box>
                        ) : (
                            <Box>
                                <Text
                                    {...addEditTodoLabel}
                                >
                                    Add todo
                                </Text>
                                <AddTodoForm addTodo={addTodo}/>
                            </Box>
                        )
                }
            </Box>
            <Text
                {...yourTasks}
            >
                Your tasks
            </Text>

            <TodoActionPanel hidden={hidden} setHidden={setHidden} todos={todos}/>

            <AppSearch searchFunction={searchFunction} todos={todos}/>

            <Box
                {...appElement}
                {...flexColumn}
            >
                {
                    searchTerm === '' ?
                        <TodoList todos={todos} editRow={editRow} deleteTodo={deleteTodo}
                                  completeTodo={completeTodo} hidden={hidden}
                        />
                        :
                        <TodoList todos={searchedTodos} editRow={editRow} deleteTodo={deleteTodo}
                                  completeTodo={completeTodo} hidden={hidden}
                        />
                }
            </Box>
        </Flex>
    )
};

export default App