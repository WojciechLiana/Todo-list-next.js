import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {Flex, Box} from 'reflexbox';
import {Input, Select} from '@rebass/forms';
import {Button, Text} from 'rebass';
import {
    inputLoginRegister,
    loginRegisterButton,
    loginTitle,
    registerSelect,
    registerStyle
} from './Style/styles';

const Register = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [gender, setGender] = useState('Female');
    const [email, setEmail] = useState('');
    const [yourID, setID] = useState('');

    const newUser = {
        name,
        gender,
        email,
        status: 'Active'
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 48de94d5e855dadb5ce3fc065b5bfbbf64208aeef62f27ce273e6a53a7eff4dc'
        },
        body: JSON.stringify(newUser)
    };

    const sendAddUserRequest = () => isFormValid(newUser) ?
        (
            fetch('https://gorest.co.in/public-api/users', requestOptions)
                .then(response => response.json())
                .then(data => data.code === 201 ?
                    setID(data.data.id) :
                    alert('Something went wrong. Please try again later.'))
        ) :
        alert('invalid data');

    const isFormValid = (user) => /\S+@\S+\.\S+/.test(user.email) && /[a-zA-Z]{2,}/.test(user.name);

    return (
        !yourID ?
            (
                <Flex
                    {...registerStyle}
                >
                    <Text
                        {...loginTitle}
                    >
                        Register
                    </Text>
                    <Box>
                        <Input
                            {...inputLoginRegister}
                            placeholder={'name'} type='text' name='name'
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Box>
                    <Select
                        {...registerSelect}
                        onChange={(event) => setGender(event.target.value)}
                    >
                        <option value='Female'>Female</option>
                        <option value='Male'>Male</option>
                    </Select>
                    <Box>
                        <Input
                            {...inputLoginRegister}
                            placeholder={'email'} type='email' name='email'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Box>
                    <Button
                        {...loginRegisterButton}
                        onClick={() => sendAddUserRequest()}
                    >
                        Register
                    </Button>
                    <Button
                        {...loginRegisterButton}
                        onClick={() => router.push('/')}
                    >
                        Back to Login
                    </Button>
                </Flex>
            ) : (
                <Flex
                    {...registerStyle}
                >
                    <Text
                        {...loginTitle}
                    >
                        Your ID for login: {yourID}
                    </Text>
                    <Button
                        {...loginRegisterButton}
                        onClick={() => router.push('/')}
                    >
                        Go to Login
                    </Button>
                </Flex>
            )
    );
};

export default Register