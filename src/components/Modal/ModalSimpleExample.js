import React, { useState } from "react";
import { Modal } from "sai-ui";
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";
import { modalSimpleExample } from "./ModalUsageCodes";
const ModalSimpleExample = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const openModal = () => {
    setShouldOpenModal(true);
  };
  const closeModal = () => {
    setShouldOpenModal(false);
  };
  return (
    <div className="mt-3">
      <div className="border py-7 w-full flex items-center justify-center">
        <button
          className="text-center  text-[white] bg-[#0072E5] p-2"
          onClick={openModal}
        >
          Open Simple Modal
        </button>
      </div>
      <Modal
        open={shouldOpenModal}
        customStyles={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2rem",
          width: "50%",
        }}
      >
        <div className="text-lg">Hi This is a simple modal</div>
        <div className="">
          <button
            onClick={closeModal}
            className="text-[#0072E5] py-2 border border-[#0072E5] px-4"
          >
            Close Modal
          </button>
        </div>
      </Modal>
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
          text={modalSimpleExample}
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

export default ModalSimpleExample;
