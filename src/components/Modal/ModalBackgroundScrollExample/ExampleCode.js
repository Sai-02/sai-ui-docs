import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal } from "sai-ui";

const ExampleCode = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const openModal = () => {
    setShouldOpenModal(true);
  };
  const closeModal = () => {
    setShouldOpenModal(false);
  };
  return (
    <div className="">
      <div className="border py-7 w-full flex items-center justify-center mt-3">
        <button
          className="text-center  text-[white] bg-[#0072E5] p-2"
          onClick={openModal}
        >
          Open Modal
        </button>
      </div>
      <Modal
        open={shouldOpenModal}
        customStyles={{
          width: "50%",
          padding: "1.4rem",
          minHeight: "100px",
        }}
        backgroundScroll={true}
      >
        <div className="w-full flex flex-row-reverse">
          <span className="cursor-pointer" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <h1 className="text-center">
          Hi this is modal in which you can even scroll the background screen
        </h1>
      </Modal>
    </div>
  );
};

export default ExampleCode;
