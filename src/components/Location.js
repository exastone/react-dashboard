// Location.js
import { Grid, Stack } from "@mui/material";
import MapView from "./MapView";
import ControlGroup from "./ControlGroup";
import DisplaySensorReadings from "./DisplaySensorReadings";
import TemperatureLog from "./TemperatureLog";
import PowerLog from "./PowerLog";

const Location = ({ conf }) => {

    return (
        <>
            <Grid item xs={12} md={5.25} marginTop={4} marginBottom={4}>
                <Stack spacing={1}>
                    <Grid item width={"100%"}>
                        <MapView config={conf} />
                    </Grid>
                    <Grid item width={"100%"}>
                        <ControlGroup config={conf} />
                    </Grid>
                </Stack>
            </Grid>
            <Grid item xs={12} md={4.5} marginTop={2}>
                <Stack paddingBottom={2}>
                    <DisplaySensorReadings config={conf} />
                    <Stack direction={"row"} justifyContent={"center"}>
                        <Grid item padding={2}>
                            <TemperatureLog config={conf} />
                        </Grid>
                        <Grid item padding={2}>
                            <PowerLog config={conf} />
                        </Grid>
                    </Stack>
                </Stack>
            </Grid>
        </>
    )
}

export default Location