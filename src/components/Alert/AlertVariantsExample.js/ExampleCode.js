import React, { useState, useEffect } from "react";
import { Alert } from "sai-ui";

const ExampleCode = () => {
  const [shouldOpenAlert, setShouldOpenAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const openAlert = () => {
    setShouldOpenAlert(true);
  };
  const closeAlert = () => {
    setShouldOpenAlert(false);
  };
  const getAlertText = () => {
    if (alertType === "error") return "It is a error alert";
    if (alertType === "success") return "It is a success alert";
    if (alertType === "info") return "It is a info alert";
    if (alertType === "warning") return "It is a warning alert";
    return "";
  };

  useEffect(() => {
    if (alertType !== "") {
      openAlert();
    }
  }, [alertType]);
  return (
    <div className="">
      <div className="border py-7 w-full flex items-center justify-center mt-3 gap-4">
        <button
          className="text-center  text-[white] bg-[#0072E5] p-2"
          onClick={() => {
            setAlertType("error");
          }}
        >
          Error
        </button>
        <button
          className="text-center  text-[white] bg-[#0072E5] p-2"
          onClick={() => {
            setAlertType("success");
          }}
        >
          Success
        </button>{" "}
        <button
          className="text-center  text-[white] bg-[#0072E5] p-2"
          onClick={() => {
            setAlertType("info");
          }}
        >
          Info
        </button>{" "}
        <button
          className="text-center  text-[white] bg-[#0072E5] p-2"
          onClick={() => {
            setAlertType("warning");
          }}
        >
          Warning
        </button>
      </div>
      <Alert
        open={shouldOpenAlert}
        closeAlert={closeAlert}
        duration={2000}
        type={alertType}
      >
        {getAlertText()}
      </Alert>
    </div>
  );
};

export default ExampleCode;
