import React from "react";

const ModalProps = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-5">Props</h2>
      <p className="mt-4 text-lg font-normal">
        Props for Modal components are:
      </p>
      <div className="overflow-auto w-full mt-4">
        <table className=" grid gap-4 border pb-3 min-w-[500px] max-w-[700px]">
          <thead>
            <tr className="grid gap-6 border-b grid grid-cols-7 p-2">
              <th className="text-left col-span-2">Name</th>
              <th className="text-left col-span-1">Type</th>
              <th className="text-left col-span-4">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">open</td>
              <td className="col-span-1">Boolean</td>
              <td className="col-span-4">To control visibility of the Modal</td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">fullScreen</td>
              <td className="col-span-1">Boolean</td>
              <td className="col-span-4">To render a full screen modal</td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">backgroundScroll</td>
              <td className="col-span-1">Boolean</td>
              <td className="col-span-4">
                To allow background screen to scroll
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">closeOnFocusRemove</td>
              <td className="col-span-1">boolean</td>
              <td className="col-span-4">
                It is used to close modal whenever user clicks outside the
                modal. Note: while adding this props, you also have to pass
                onClose prop.
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">onClose</td>
              <td className="col-span-1">function</td>
              <td className="col-span-4">
                It takes the function which closes the modal. It is mandatory to
                use when you want to close modal on focus remove
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">customStyles</td>
              <td className="col-span-1">Object</td>
              <td className="col-span-4">
                They are used for styling the component they will override the
                current styles
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">customClasses</td>
              <td className="col-span-1">String</td>
              <td className="col-span-4">
                This prop is used for giving custom classes to style the
                component
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">backgroundColor</td>
              <td className="col-span-1">String</td>
              <td className="col-span-4">
                It is used to customize the background color of container for
                modal
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModalProps;
