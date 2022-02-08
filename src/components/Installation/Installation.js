import React from "react";

const Installation = () => {
  return (
    <div className="px-4 w-full">
      <h1 className="text-3xl font-bold ">Installation</h1>
      <p className="mt-4 text-lg font-normal">
        Sai-UI is a simple UI library. Its advantage is that it is very much
        customizable.
      </p>

      <h2 className="mt-4 text-2xl font-semibold">npm</h2>
      <div className="mt-3 bg-[#001E3C] text-white rounded-lg p-3 w-96 max-w-full py-4 text-lg">
        npm install sai-ui
      </div>
      <h2 className="mt-4 text-2xl font-semibold">yarn</h2>
      <div className="mt-3 bg-[#001E3C] text-white rounded-lg p-3 w-96 max-w-full py-4 text-lg">
        yarn add sai-ui
      </div>
      <h2 className="text-2xl font-bold mt-8">About</h2>
      <p className="mt-3 text-lg font-normal">
        It is a simple frontend library for React. It is very customizable. It
        provides many components such as Skeleton, Modal, Tooltip. If you like
        this package feel free to star it on github. If you found any bugs then
        please open issue in github. I will be glad to work on them.
      </p>
    </div>
  );
};

export default Installation;
