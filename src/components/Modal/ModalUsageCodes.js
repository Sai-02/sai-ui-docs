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
