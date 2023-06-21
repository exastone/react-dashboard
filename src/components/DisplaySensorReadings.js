//DisplaySensorReadings.js
import React from 'react';
import TemperatureNow from "./TemperatureNow";
import PowerNow from "./PowerNow";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack"

const DisplaySensorReadings = ({config}) => {
    const conf = config;
    
    return (
        <Stack spacing={2} padding={2}>
            <TemperatureNow config={conf} />
            <Divider />
            <PowerNow config={conf} />
        </Stack>
    );
};

export default DisplaySensorReadings;
