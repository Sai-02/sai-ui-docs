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
          minHeight: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        backgroundScroll={true}
        closeOnFocusRemove={true}
        onClose={closeModal}
      >
        <h1 className="text-center text-xl">
          You can close this modal by clicking outside the modal.
        </h1>
      </Modal>
    </div>
  );
};

export default ExampleCode;
