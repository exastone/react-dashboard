//Sensor.js
import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Sensor = (props) => {

  return (
    <TableRow>
      {props.id !== undefined ? <TableCell align={"center"}>{props.id}</TableCell> : null}
      <TableCell align={"center"}>{props.name}</TableCell>
      <TableCell align={"center"}>{props.value} {props.type === "temp" ? " °C" : " " || "NULL"}</TableCell>
      <TableCell align={"center"} width={150}>{props.lastUpdate || "N/A"}</TableCell>
    </TableRow>
  );
};

export default Sensor;

