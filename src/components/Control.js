//AntennaControl.js
import * as React from "react";
import Switch from '@mui/material/Switch'
import { FormControlLabel, FormGroup } from "@mui/material";

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { useState, useEffect } from "react";
import { getGPIOState, setGPIOState } from "../utils/gpioAPI";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2, 1, 1, 1),
    textAlign: "center"
}));


const Control = (props) => {
    const [isDisable, setDisable] = useState(true);
    const [status, setStatus] = useState(null);
    const [isChecked, setChecked] = useState(false);

    const baseURL = props.baseURL;

    useEffect(() => {
        getGPIOState(props.pinid, props.baseURL).then((data) => {
            if (data != null) {
                setDisable(false);
                setStatus(data);
                setChecked(data)
            }
        });
    }, []);

    return (
        <div style={{ width: "100%" }}>
            <Stack direction={"row"} alignItems={"center"} spacing={1} marginTop={1}>
                <Item style={{ width: 140, height: 40 }}>
                    <FormGroup>
                        <FormControlLabel label={props.name} control={
                            <Switch disabled={isDisable}
                                checked={isChecked}
                                onClick={(event) => {
                                    setGPIOState(event, props.pinid, props.baseURL).then((data) => {
                                        if (data != null) {
                                            setStatus(data.active);
                                            setChecked(data.active)
                                        } else {
                                            setDisable(true);
                                            setStatus(null)
                                        }
                                    });
                                }}
                            />
                        } />
                    </FormGroup>
                </Item>
                <Item style={{ width: 180, height: 40, "text-align": "center", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                    <p>
                        Status: <b>{status === true ? "ON" : status === false ? "OFF" : "NO-COMM"}</b>
                    </p>
                </Item>
            </Stack>
        </div >
    );
}

export default Control;