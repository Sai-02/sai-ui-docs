import React, { useState } from "react";
import { Alert } from "sai-ui";
const AlertPage = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlert = () => {
    setOpenAlert(false);
  };
  return (
    <div className="">
      <Alert type={"success"} open={openAlert} closeAlert={closeAlert}>
        Hi this i a alert
      </Alert>
      <button
        onClick={() => {
          setOpenAlert(true);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default AlertPage;
