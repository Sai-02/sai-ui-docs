export const alertSimpleExample=`
import React, { useState } from "react";
import { Alert } from "sai-ui";
const ExampleCode = () => {
  const [shouldOpenAlert, setShouldOpenAlert] = useState(false);
  const openAlert = () => {
    setShouldOpenAlert(true);
  };
  const closeAlert = () => {
    setShouldOpenAlert(false);
  };
  return (
    <div className="">
      <div className="border py-7 w-full flex items-center justify-center mt-3">
        <button
          className="text-center  text-[white] bg-[#0072E5] p-2"
          onClick={openAlert}
        >
          Open Alert
        </button>
      </div>
      <Alert
        open={shouldOpenAlert}
        closeAlert={closeAlert}
        duration={2000}
        type="error"
      >
        It is a simple Alert !
      </Alert>
    </div>
  );
};

export default ExampleCode;

`