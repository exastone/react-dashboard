//PowerLog.js
import { Button, Modal } from "@mui/material";
import { Download } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";

import { fetchPowerLog } from "../utils/sensorsAPI";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const INITIAL_COUNT = 30;

const PowerLog = ({ config }) => {

  const baseURL = config.baseURL;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState("stopped");


  const handleStart = () => {
    setStatus("started");
    setSecondsRemaining(INITIAL_COUNT);
  };

  const handleReset = () => {
    setSecondsRemaining(INITIAL_COUNT);
  };

  useInterval(
    () => {
      if (secondsRemaining > 0 && status === "started") {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setSecondsRemaining(INITIAL_COUNT);
        setStatus("stopped");
      }
    },
    status === "started" ? 1000 : null
    // passing null stops the interval
  );


  return (
    <div>
      <Button variant="contained" endIcon={<Download />}
        onClick={() => {
          if (status === "started") {
            handleOpen();
          } else {
            handleStart();
            fetchPowerLog(baseURL).then((data) => {
              if (data != null) {
                const a = document.createElement("a");
                a.href = window.URL.createObjectURL(data);
                a.download = "PowerHistory.csv";
                a.click();
              }
            }
            )
          }
        }}>
        Power Log
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          This is slow to retrieve, Please wait {twoDigits(secondsRemaining)} seconds before attempting to download power log again
        </Box>
      </Modal>
    </div>
  );
};

export default PowerLog;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, "0");
