export const modalSimpleExample = `
    import React, { useState } from "react";
    import { Modal } from "sai-ui";
    const ModalSimpleExample = () => {
    const [shouldOpenModal, setShouldOpenModal] = useState(false);
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
        </div>
    );
    };

    export default ModalSimpleExample;

`;

export const modalFullScreenExample = `
    import { faTimes } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import React, { useState } from "react";
    import { Modal } from "sai-ui";
    const ModalFullScreenExample = () => {
    const [shouldOpenModal, setShouldOpenModal] = useState(false);
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
        </div>
    );
    };

    export default ModalFullScreenExample;

`;

export const modalBackgroundScrollExample = `
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
          Open Full Screen Modal
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

`;
export const modalBackgroundColorExample = `
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
        backgroundColor={"rgba(	0, 114, 229,0.4)"}
      >
        <div className="w-full flex flex-row-reverse">
          <span className="cursor-pointer" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <h1 className="text-center">
          In this way we can change the color of background window
        </h1>
      </Modal>
    </div>
  );
};

export default ExampleCode;

 `;
export const modalCloseOnFocusRemove = `
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

`;
