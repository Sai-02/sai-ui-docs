import React from "react";

const SkeletonProps = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-5">Props</h2>
      <p className="mt-4 text-lg font-normal">
        Props for Skeleton components are:
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
              <td className="col-span-2">Width</td>
              <td className="col-span-1">String</td>
              <td className="col-span-4">For specifying width</td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">Height</td>
              <td className="col-span-1">String</td>
              <td className="col-span-4">For specifying Height</td>
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
              <td className="col-span-2">Variant</td>
              <td className="col-span-1">String</td>
              <td className="col-span-4">
                This is used to tell which variant of Skeleton is to be used.
                Available variants are :{" "}
                <span className="text-red-500"> "text" </span>, <span className="text-red-500">"circle"</span>,<span className="text-red-500">"rectangle"</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkeletonProps;
