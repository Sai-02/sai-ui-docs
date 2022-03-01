import React, { useState } from "react";
import ExampleCode from "./ExampleCode";
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";
import { modalBackgroundScrollExample } from "../ModalUsageCodes";

const ModalBackgroundScrollExample = () => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-5">Background Scroll</h2>
      <p className="mt-4 text-xl">
        You can make modal background scrollable too.
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
          text={modalBackgroundScrollExample}
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

export default ModalBackgroundScrollExample;
