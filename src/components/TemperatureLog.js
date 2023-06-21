//TemperatureLog.js
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

import { fetchTemperatureLog } from "../utils/sensorsAPI";

const TemperatureLog = ({ config }) => {
    const baseURL = config.baseURL;

    return (
        <div>
            <Button variant="contained" endIcon={<Download />}
                onClick={() => {
                    fetchTemperatureLog(baseURL).then((data) => {
                        if (data !== null) {
                            var a = document.createElement("a");
                            a.href = window.URL.createObjectURL(data);
                            a.download = "history.txt";
                            a.click();
                        }
                    })
                }}>
                Temp. Log
            </Button>
        </div>
    );
};

export default TemperatureLog;
