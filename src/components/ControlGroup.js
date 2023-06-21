// AntennaControlGroup.js
import Control from "./Control";
import { useEffect } from "react";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Grid, Item } from "@mui/material";

const ControlGroup = ({ config }) => {
    const baseURL = config.baseURL;

    useEffect(() => {
        console.log("From Controll group: " + baseURL)
    })


    return (
        <div style={{ width: "80%", display: "contents" }}>
            <Paper elevation={2}>
                <Stack spacing={0} alignItems={"center"} marginTop={0} padding={1} >
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item alignItems={"center"} justifyContent={"space-between"} columns={12}>
                            <Control baseURL={baseURL} name={"Video 1"} pinid={1} />
                            <Control baseURL={baseURL} name={"Video 2"} pinid={2} />
                        </Grid>
                        <Grid item alignItems={"center"} justifyContent={"space-between"} columns={12}>
                            <Control baseURL={baseURL} name={"Video 3"} pinid={3} />
                            <Control baseURL={baseURL} name={"Video 4"} pinid={4} />
                        </Grid>
                    </Grid>
                </Stack>
            </Paper>
        </div>
    );
}

export default ControlGroup;
