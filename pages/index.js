import React, {useState} from 'react';
import App from './App';
import Login from './Login';
import {Flex} from 'reflexbox';

const Main = () => {
    const [name, setName] = useState('');
    const [userID, setUserID] = useState(0);
    const [isLogged, setIsLogged] = useState(false);

    const validation = () => {
        fetch(`https://gorest.co.in/public-api/users/${userID}`)
            .then(response => response.json())
            .then(data => data.code === 200 && (data.data.name.toLowerCase() === name.toLowerCase() && data.data.id.toString() === userID) ?
                setIsLogged(true) : alert('Invalid name or id'));
    };

    return (
        isLogged ?
            (
                <App setIsLogged={setIsLogged} userID={userID} name={name}/>
            ) : (
                <Flex
                    justifyContent={'center'}
                >
                    <Login setName={setName} setUserID={setUserID} validation={validation}/>
                </Flex>
            )
    );
};

export default Main