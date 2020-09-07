import {Input} from '@rebass/forms';
import {searchStyles} from '../Style/styles';
import {Box} from 'reflexbox';
import React from 'react';

const AppSearch = (props)=> {
    return (
        <Box>
            {
                props.todos.length ?
                    (
                        <Input
                            {...searchStyles}
                            placeholder={'Search'} onChange={props.searchFunction}
                        />
                    ) :
                    null
            }
        </Box>
    );
};

export default AppSearch;