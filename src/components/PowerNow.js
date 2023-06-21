//PowerNow.js

import Sensor from "./Sensor"

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

import { fetchPowerNow } from "../utils/sensorsAPI";

const PowerNow = ({ config }) => {
    const [v1, setV1] = useState("no-data");
    const [v2, setV2] = useState("no-data");
    const [v3, setV3] = useState("no-data");
    const [vLine, setLine] = useState("no-data");
    const [timestamp, setTimestamp] = useState("no-data");

    const baseURL = config.baseURL;

    useEffect(() => {
        const interval = setInterval(() => {
            fetchPowerNow(baseURL).then((data) => {
                if (data !== null) {
                    setV1(data.VDC1);
                    setV2(data.VDC2);
                    setV3(data.VDC3);
                    setLine(data.LINE);
                    let currentDate = new Date();
                    setTimestamp(currentDate.toLocaleString());
                }
            });
        }, 5000);

        return () => clearInterval(interval);
    });

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Power Reading</TableCell>
                            <TableCell align="center">Sensor Value</TableCell>
                            <TableCell align="center">Last Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Sensor name={"Voltage"} value={v1} lastUpdate={timestamp} />
                        <Sensor name={"Current"} value={v2} lastUpdate={timestamp} />
                        <Sensor name={"Data"} value={v3} lastUpdate={timestamp} />
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PowerNow;