import React from 'react';
import moment from 'moment-timezone';
import {Select} from '@rebass/forms';
import {Box} from 'reflexbox';
import {Text} from 'rebass';
import {timeZoneSelect} from '../Style/styles';

const TimeZone = (props) => {
    const zones = moment.tz.names();
    const userZone = moment.tz.guess();

    return (
        <Box
            fontSize={10}
        >
            <Text>
                Select your time-zone
            </Text>
            <Select
                {...timeZoneSelect}
                name={zones}
                defaultValue={userZone}
                onChange={(e) => props.changeZone(e.target.value)}
            >
                {
                    zones.map(zone =>
                        <option value={zone} key={zone}>
                            {zone}
                        </option>
                    )
                }
            </Select>
        </Box>
    );
};

export default TimeZone;