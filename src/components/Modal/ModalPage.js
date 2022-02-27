import React from "react";
import ModalSimpleExample from "./ModalSimpleExample";
const ModalPage = () => {
  return (
    <div className="px sm:px-2 lg:px-4 w-full">
      <h1 className="text-3xl font-bold">Modal</h1>
      <p className="mt-4 text-xl font-normal">
        A modal is a web page element that displays in front of and deactivates
        all other page content.
      </p>
      <h2 className="text-2xl font-bold mt-5">Usage</h2>
      <p className="mt-4 text-xl">
        It can be directly used in your component. Example :
      </p>
      {/* Simple Modal Example */}
      <ModalSimpleExample />
    </div>
  );
};

export default ModalPage;
