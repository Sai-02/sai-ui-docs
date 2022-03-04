import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal } from "sai-ui";
import { modalFullScreenExample } from "./ModalUsageCodes";
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";
const ModalFullScreenExample = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const openModal = () => {
    setShouldOpenModal(true);
  };
  const closeModal = () => {
    setShouldOpenModal(false);
  };
  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-5">Full Screen Modal</h2>
      <p className="mt-4 text-xl">
        You can cover your whole screen by this modal
      </p>
      <div className="border py-7 w-full flex items-center justify-center mt-3">
        <button
          className="text-center  text-[white] bg-[#0072E5] p-2"
          onClick={openModal}
        >
          Open Full Screen Modal
        </button>
      </div>
      <Modal
        open={shouldOpenModal}
        customStyles={{
          padding: "2rem",
        }}
        fullScreen={true}
      >
        <div className="flex w-full flex-row-reverse">
          <span className="cursor-pointer text-lg" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <h1 className="text-2xl">It is full screen Modal</h1>
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
          text={modalFullScreenExample}
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

export default ModalFullScreenExample;
