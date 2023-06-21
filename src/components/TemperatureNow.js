//TemperatureNow.js
import Sensor from "./Sensor"

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

import { fetchCurrentTemp } from "../utils/sensorsAPI";

const TemperatureNow = ({ config }) => {
    const [tempIntern1, setTempIntern1] = useState("no-data");
    const [tempIntern2, setTempIntern2] = useState("no-data");
    const [tempExtern1, setTempExtern1] = useState("no-data");
    const [tempExtern2, setTempExtern2] = useState("no-data");
    const [timestamp, setTimestamp] = useState("no-data");

    const baseURL = config.baseURL;

    useEffect(() => {
        const interval = setInterval(() => {
            fetchCurrentTemp(baseURL).then((data) => {
                if (data != null) {
                    setTempIntern1(data.oneWireSensor1);
                    setTempIntern2(data.oneWireSensor2);
                    setTempExtern1(data.oneWireSensor3);
                    setTempExtern2(data.oneWireSensor4);
                    let currentDate = new Date();
                    setTimestamp(currentDate.toLocaleString());
                }
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell width="100">Temp. Reading</TableCell>
                        <TableCell align="center">Sensor ID</TableCell>
                        <TableCell align="center">Sensor Value</TableCell>
                        <TableCell align="center">Last Update</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Sensor id={"Internal 1"} name={"ts-x231-1"} value={tempIntern1} lastUpdate={timestamp} type={"temp"} />
                    <Sensor id={"Internal 2"} name={"ts-x231-2"} value={tempIntern2} lastUpdate={timestamp} type={"temp"} />
                    <Sensor id={"External 1"} name={"ts-x231-3"} value={tempExtern1} lastUpdate={timestamp} type={"temp"} />
                    <Sensor id={"External 2"} name={"ts-x231-4"} value={tempExtern2} lastUpdate={timestamp} type={"temp"} />
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TemperatureNow;