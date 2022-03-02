import React, { useState } from "react";
import ExampleCode from "./ExampleCode";
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";
import { modalBackgroundColorExample } from "../ModalUsageCodes";

const ModalBackgroundColorExample = () => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-5">Background Color Change</h2>
      <p className="mt-4 text-xl">
        You can customize the color of background screen of modal
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
          text={modalBackgroundColorExample}
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

export default ModalBackgroundColorExample;
