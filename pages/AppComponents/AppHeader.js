import {appButton, appElement, header} from '../Style/styles';
import TimeZone from './TimeZone';
import {Box, Flex} from 'reflexbox';
import {Button, Text} from 'rebass';
import React from 'react';

const AppHeader = (props) => {
    return (
        <Box
            {...appElement}
        >
            <Flex
                {...header}
            >
                <TimeZone changeZone={props.changeZone}/>
                <Box
                    ml={'auto'}
                >
                    <Text>
                        Logged as: {props.name}
                    </Text>
                    <Button
                        {...appButton}
                        onClick={() => props.setIsLogged(false)}
                    >
                        Log out
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default AppHeader;