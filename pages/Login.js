import React from 'react';
import {useRouter} from 'next/router';
import {Flex, Box} from 'reflexbox';
import {Input} from '@rebass/forms';
import {Button, Text} from 'rebass';
import {loginStyle, inputLoginRegister, loginTitle, loginRegisterButton} from './Style/styles';

const Login = (props) => {
    const router = useRouter();

    return (
        <Flex
            {...loginStyle}
        >
            <Text
                {...loginTitle}
            >
                Log in
            </Text>
            <Box>
                <Input
                    {...inputLoginRegister}
                    placeholder={'name'} type='text' name='name'
                    onChange={(event) => props.setName(event.target.value)}
                />
            </Box>
            <Box>
                <Input
                    {...inputLoginRegister}
                    placeholder={'ID'} type='number' name='key'
                    onChange={(event) => props.setUserID(event.target.value)}
                />
            </Box>
            <Button
                {...loginRegisterButton}
                onClick={() => props.validation()}
            >
                Login
            </Button>
            <Button
                {...loginRegisterButton}
                onClick={() => router.push('/Register')}
            >
                Create Account
            </Button>
        </Flex>
    );
};

export default Login