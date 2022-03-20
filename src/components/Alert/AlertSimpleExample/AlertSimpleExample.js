import React, { useState } from "react";
import ExampleCode from "./ExampleCode";
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";
import { alertSimpleExample } from "../AlertUsageCodes";
const AlertSimpleExample = () => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-5">Usage</h2>
      <p className="mt-4 text-xl">
        It can be directly used in your component. Example :
      </p>
      <ExampleCode />
      <div className="py-2">
        <button
          className={`text-[white] bg-[#4da5ff] rounded px-2 py-1 `}
          onClick={() => {
            setShowCode(!showCode);
          }}
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>
      </div>
      <div
        className={`w-full overflow-auto h-[24rem] ${showCode ? "" : "hidden"}`}
      >
        <CopyBlock
          text={alertSimpleExample}
          language={"jsx"}
          theme={tomorrowNightBlue}
          customStyle={{
            width: "max-content",
            minWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default AlertSimpleExample;
